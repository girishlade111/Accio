### Problem Summary
Currently, in `ContactPage.tsx`, submitting the contact form executes a hardcoded `window.location.href = mailto:admin@ladestack.in?subject=...` protocol.

### User Experience Issue
- Many users on desktop browsers (Windows/Linux/Mac) do not have a default desktop mail client installed (e.g. they use Gmail, Outlook Web, or Proton in the browser). Clicking "Send Message" produces no response or launches an unconfigured OS email wizard.
- While `.env.example` specifies `VITE_CONTACT_ENDPOINT`, the code does not check or submit to this endpoint if provided.

### Proposed Solution
1. If `import.meta.env.VITE_CONTACT_ENDPOINT` is defined:
   - Perform an asynchronous JSON `fetch` POST request.
   - Display real loading and success confirmation.
2. If no endpoint is configured:
   - Offer a "Copy message & email to clipboard" button alongside the mailto action so webmail users can paste directly into Gmail or Outlook.