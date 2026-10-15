const WHATSAPP_NUMBER = "919022958266"; // Pavan Vatyani
const DEFAULT_MESSAGE =
  "Hi Artha Vriksha, I'd like to know more about your Mutual Funds / Real Estate / Insurance / Loans services.";

export function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/20 hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="#ffffff" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.31.647 4.47 1.77 6.31L3 29l7.86-2.72A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818c-1.95 0-3.767-.545-5.318-1.49l-.381-.226-4.664 1.614 1.53-4.545-.248-.394A9.77 9.77 0 0 1 5.818 15c0-5.618 4.568-10.182 10.186-10.182 5.618 0 10.182 4.564 10.182 10.182 0 5.618-4.564 10.182-10.182 10.182Zm5.6-7.632c-.307-.153-1.816-.896-2.098-.998-.281-.102-.487-.153-.692.154-.204.306-.793.997-.972 1.202-.179.205-.358.23-.665.077-.307-.154-1.294-.477-2.465-1.522-.911-.813-1.526-1.816-1.705-2.123-.179-.306-.019-.472.134-.625.138-.137.307-.358.46-.537.153-.18.204-.307.307-.512.102-.205.05-.384-.026-.537-.077-.154-.692-1.669-.949-2.286-.25-.6-.504-.52-.692-.53-.179-.008-.384-.01-.589-.01a1.13 1.13 0 0 0-.818.384c-.281.307-1.073 1.05-1.073 2.562 0 1.512 1.099 2.972 1.252 3.177.153.205 2.163 3.303 5.24 4.632.732.316 1.303.505 1.748.646.734.233 1.402.2 1.93.121.589-.088 1.816-.742 2.072-1.459.256-.716.256-1.331.179-1.459-.076-.128-.281-.205-.588-.358Z" />
      </svg>
    </a>
  );
}
