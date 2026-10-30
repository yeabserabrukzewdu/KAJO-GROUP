import emailjs from '@emailjs/browser';

interface EmailJSConfig {
  serviceId: string;
  templateIdContact: string;
  templateIdQuote: string;
  publicKey: string;
  ownerEmail: string;
}

const getConfig = (): EmailJSConfig => {
  const env = (import.meta as any).env || {};
  return {
    serviceId: env.VITE_EMAILJS_SERVICE_ID || '',
    templateIdContact: env.VITE_EMAILJS_TEMPLATE_ID_CONTACT || '',
    templateIdQuote: env.VITE_EMAILJS_TEMPLATE_ID_QUOTE || '',
    publicKey: env.VITE_EMAILJS_PUBLIC_KEY || '',
    ownerEmail: 'info@illuimportexport.com',
  };
};

const isValidTemplateId = (id: string | undefined): boolean => {
  if (!id) return false;
  const cleaned = id.trim();
  if (cleaned === '') return false;
  if (cleaned.toLowerCase().includes('your_')) return false;
  if (cleaned.toLowerCase().includes('template_id')) return false;
  return true;
};

const formatCategory = (cat: string): string => {
  if (!cat) return 'All Export & Investment Divisions';
  const c = cat.toLowerCase();
  if (c === 'coffee') return 'Green Bean Coffee Export';
  if (c === 'pulses') return 'Spices, Pulses & Oilseeds Export';
  if (c === 'lithium') return 'Lithium Ore Export';
  if (c === 'investments') return 'Diverse Investments & Import Distribution';
  if (c === 'all') return 'All Export & Investment Divisions';
  return cat;
};

export async function sendContactInquiry(
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<{ success: boolean; simulated: boolean; error?: string }> {
  const config = getConfig();

  const contactTemplateId = isValidTemplateId(config.templateIdContact)
    ? config.templateIdContact
    : (isValidTemplateId(config.templateIdQuote) ? config.templateIdQuote : '');

  if (!config.serviceId || !config.publicKey || !contactTemplateId) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, simulated: true };
  }

  try {
    const templateParams = {
      to_email: config.ownerEmail,
      owner_email: config.ownerEmail,
      from_name: name,
      from_email: email,
      subject: `[Kajo Group Contact] ${subject}`,
      message: message,
      reply_to: email,
      user_name: name,
      USER_NAME: name,
      user_email: email,
      USER_EMAIL: email,
      request: subject,
      REQUEST: subject,
      request_subject: subject,
      REQUEST_SUBJECT: subject,
      additional_information: message,
      ADDITIONAL_INFORMATION: message
    };

    const customerTemplateId = isValidTemplateId(config.templateIdContact)
      ? config.templateIdContact
      : (isValidTemplateId(config.templateIdQuote) ? config.templateIdQuote : contactTemplateId);

    const customerParams = {
      to_email: email,
      to_name: name,
      from_name: 'Kajo Group • illu Import Export',
      subject: 'Inquiry Received - Kajo Group (illu Import Export)',
      message: `Dear ${name},\n\nThank you for contacting Kajo Group. We have received your trade inquiry and our team in Addis Ababa will respond within 1 to 2 business days.\n\nWarm regards,\nKajo Group • illu Import Export\nArada Sub City, Habtegiorgis Street, Addis Ababa, Ethiopia`,
      reply_to: config.ownerEmail,
      owner_email: config.ownerEmail,
      user_name: name,
      USER_NAME: name,
      user_email: email,
      USER_EMAIL: email,
      title: subject,
      TITLE: subject,
      additional_information: `Thank you for contacting Kajo Group. Our international trade team will respond within 1 to 2 business days.`,
      ADDITIONAL_INFORMATION: `Thank you for contacting Kajo Group. Our international trade team will respond within 1 to 2 business days.`
    };

    let ownerSuccess = false;
    let ownerError: any = null;
    try {
      await emailjs.send(config.serviceId, contactTemplateId, templateParams, config.publicKey);
      ownerSuccess = true;
    } catch (err: any) {
      ownerError = err;
    }

    await new Promise((resolve) => setTimeout(resolve, 300));

    let customerSuccess = false;
    let customerError: any = null;
    try {
      await emailjs.send(config.serviceId, customerTemplateId, customerParams, config.publicKey);
      customerSuccess = true;
    } catch (err: any) {
      customerError = err;
    }

    if (!ownerSuccess && !customerSuccess) {
      throw ownerError || customerError || new Error('Both EmailJS contact dispatches failed.');
    }

    return { success: true, simulated: false };
  } catch (err: any) {
    return { success: false, simulated: false, error: err?.text || String(err) };
  }
}

export async function sendQuoteRequest(data: {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  productCategory: string;
  estimatedVolume: string;
  destinationCountry: string;
  additionalMessage: string;
}): Promise<{ success: boolean; simulated: boolean; error?: string }> {
  const config = getConfig();

  const quoteTemplateId = isValidTemplateId(config.templateIdQuote)
    ? config.templateIdQuote
    : (isValidTemplateId(config.templateIdContact) ? config.templateIdContact : '');

  if (!config.serviceId || !config.publicKey || !quoteTemplateId) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, simulated: true };
  }

  try {
    const templateParams = {
      to_email: config.ownerEmail,
      owner_email: config.ownerEmail,
      from_name: data.fullName,
      from_email: data.email,
      subject: `[Kajo Group Quote] ${formatCategory(data.productCategory).toUpperCase()} - ${data.companyName || 'Corporate Buyer'}`,
      company_name: data.companyName || 'N/A',
      phone: data.phone || 'N/A',
      destination_country: data.destinationCountry,
      message: data.additionalMessage || 'No additional message provided.',
      reply_to: data.email,
      user_name: data.fullName,
      USER_NAME: data.fullName,
      user_email: data.email,
      USER_EMAIL: data.email,
      user_phone: data.phone || 'N/A',
      USER_PHONE: data.phone || 'N/A',
      phone_number: data.phone || 'N/A',
      PHONE_NUMBER: data.phone || 'N/A',
      country: data.destinationCountry,
      COUNTRY: data.destinationCountry,
      product_category: formatCategory(data.productCategory),
      PRODUCT_CATEGORY: formatCategory(data.productCategory),
      estimated_volume: data.estimatedVolume,
      ESTIMATED_VOLUME: data.estimatedVolume,
      additional_information: data.additionalMessage || 'No additional message provided.',
      ADDITIONAL_INFORMATION: data.additionalMessage || 'No additional message provided.'
    };

    const customerTemplateId = isValidTemplateId(config.templateIdContact)
      ? config.templateIdContact
      : quoteTemplateId;

    const customerParams = {
      to_email: data.email,
      to_name: data.fullName,
      from_name: 'Kajo Group • illu Import Export',
      subject: 'Quote Request Received - Kajo Group',
      message: `Dear ${data.fullName},\n\nThank you for requesting a commercial quotation from Kajo Group (illu Import Export). Our export & trade specialists will review your volume and destination specifications and revert within 1 to 2 business days.\n\nWarm regards,\nKajo Group • illu Import Export`,
      reply_to: config.ownerEmail,
      owner_email: config.ownerEmail,
      user_name: data.fullName,
      USER_NAME: data.fullName,
      user_email: data.email,
      USER_EMAIL: data.email,
      title: formatCategory(data.productCategory),
      TITLE: formatCategory(data.productCategory),
      additional_information: `We received your quotation request and will respond within 1 to 2 business days.`,
      ADDITIONAL_INFORMATION: `We received your quotation request and will respond within 1 to 2 business days.`
    };

    let ownerSuccess = false;
    let ownerError: any = null;
    try {
      await emailjs.send(config.serviceId, quoteTemplateId, templateParams, config.publicKey);
      ownerSuccess = true;
    } catch (err: any) {
      ownerError = err;
    }

    await new Promise((resolve) => setTimeout(resolve, 300));

    let customerSuccess = false;
    let customerError: any = null;
    try {
      await emailjs.send(config.serviceId, customerTemplateId, customerParams, config.publicKey);
      customerSuccess = true;
    } catch (err: any) {
      customerError = err;
    }

    if (!ownerSuccess && !customerSuccess) {
      throw ownerError || customerError || new Error('Both EmailJS quote dispatches failed.');
    }

    return { success: true, simulated: false };
  } catch (err: any) {
    return { success: false, simulated: false, error: err?.text || String(err) };
  }
}
