# ET-01 (HTML) — Contact Form — Internal Notification to Ritesh

**Template Name in GHL:** `ET-01 — Aifyze Contact Form Internal Notification`
**Used In:** `Workflows/contact-form-lead-workflow.md` (add as a new Send Email action)
**Sent To:** Ritesh Watts — *(fill in his exact email in the GHL "To" field — not in the CRM's custom fields, so not templated here)*
**Trigger:** Same as the rest of the workflow — website Contact Form submitted

**Subject:**
```
New Contact Form Lead — {{contact.name}}
```

> Copy everything inside the code block below and paste it into GHL's HTML editor (Send Email action → switch to HTML/code view).

---
```html
<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
  <title>New Contact Form Lead</title>
  <!--[if mso]>
  <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
  <![endif]-->
  <style>
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
    body { margin: 0 !important; padding: 0 !important; background-color: #F7F6FA; width: 100% !important; }
    a { color: #7C3AED; }

    @media only screen and (max-width: 620px) {
      .email-container { width: 100% !important; }
      .email-body { padding: 32px 24px !important; }
      .hero-title { font-size: 22px !important; }
      .field-label { font-size: 11px !important; }
      .cta-button { display: block !important; width: 100% !important; text-align: center !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#F7F6FA;width:100%;"><div style="display:none;font-size:1px;color:#F7F6FA;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">{{contact.name}} from {{contact.organization}} just submitted the Aifyze contact form.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>

  <!-- Outer wrapper -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#F7F6FA;">
    <tbody><tr>
      <td align="center" style="padding:32px 12px;">

        <!-- Email card -->
        <table class="email-container" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color:#FCFBFF;border:1px solid #E6E1F0;border-radius:10px;overflow:hidden;">

          <!-- Top accent bar (two-tone, echoes brand gradient) -->
          <tbody><tr>
            <td style="padding:0;font-size:0;line-height:0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tbody><tr>
                <td width="50%" style="background-color:#7C3AED;height:4px;line-height:4px;font-size:0;">&nbsp;</td>
                <td width="50%" style="background-color:#F97066;height:4px;line-height:4px;font-size:0;">&nbsp;</td>
              </tr></tbody></table>
            </td>
          </tr>

          <!-- Logo -->
          <tr>
            <td style="padding:32px 46px 0;">
              <img src="https://assets.cdn.filesafe.space/hGfSazDg0icOi6lgiT07/media/69c7c2fa2e89d8b9a366ffa8.png" width="132" alt="Aifyze" style="display:block;width:132px;max-width:132px;height:auto;">
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="email-body" style="padding:28px 46px 40px;">

              <!-- Eyebrow -->
              <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#7C3AED;font-weight:700;">Aifyze CRM &nbsp;·&nbsp; New Lead Notification</p>

              <!-- Headline -->
              <h1 class="hero-title" style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.25;color:#1A1625;font-weight:700;">New Contact Form Submission</h1>

              <!-- Accent bar (two-tone) -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:28px;"><tbody><tr>
                <td width="22" style="background-color:#7C3AED;height:3px;line-height:3px;font-size:0;">&nbsp;</td>
                <td width="22" style="background-color:#F97066;height:3px;line-height:3px;font-size:0;">&nbsp;</td>
              </tr></tbody></table>

              <p style="margin:0 0 26px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.8;color:#4A4458;">A new lead just came in through the website contact form.</p>

              <!-- Contact details -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:24px;background-color:#F0ECF8;border:1px solid #E6E1F0;border-radius:8px;">
                <tbody>
                  <tr>
                    <td style="padding:20px 22px 6px;">
                      <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1A1625;"><span class="field-label" style="display:inline-block;width:110px;color:#7A748C;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Name</span> {{contact.name}}</p>
                      <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1A1625;"><span class="field-label" style="display:inline-block;width:110px;color:#7A748C;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</span> {{contact.email}}</p>
                      <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1A1625;"><span class="field-label" style="display:inline-block;width:110px;color:#7A748C;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Phone</span> {{contact.phone}}</p>
                      <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1A1625;"><span class="field-label" style="display:inline-block;width:110px;color:#7A748C;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Business</span> {{contact.organization}}</p>
                      <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1A1625;"><span class="field-label" style="display:inline-block;width:110px;color:#7A748C;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Country</span> {{contact.country}}</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- Stage of AI callout -->
              <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#7A748C;font-weight:600;">Stage of AI in Their Business</p>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:28px;">
                <tbody><tr>
                  <td style="border-left:3px solid #7C3AED;padding:16px 22px;background-color:#F0ECF8;border-radius:0 8px 8px 0;">
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:#1A1625;font-style:italic;">{{contact.style_of_business_mangement}}</p>
                  </td>
                </tr>
              </tbody></table>

              <!-- Divider -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tbody><tr><td style="border-top:1px solid #E6E1F0;height:1px;font-size:0;line-height:0;">&nbsp;</td></tr></tbody></table>
              <div style="height:28px;line-height:28px;font-size:0;">&nbsp;</div>

              <!-- CTA -->
              <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#4A4458;">This lead has been added to <strong style="color:#1A1625;">Aifyze - Client Acquisition</strong>, stage <strong style="color:#1A1625;">Lead Submitted</strong>.</p>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:6px;">
                <tbody><tr>
                  <td style="border-radius:6px;background-color:#7C3AED;">
                    <a href="mailto:{{contact.email}}" class="cta-button" style="display:inline-block;padding:14px 28px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:6px;">Reply to {{contact.name}} →</a>
                  </td>
                </tr>
              </tbody></table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:22px 46px;background-color:#F0ECF8;border-top:1px solid #E6E1F0;text-align:center;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#7A748C;letter-spacing:0.5px;">Aifyze &nbsp;·&nbsp; Automated Notification &nbsp;·&nbsp; a division of Watts Group</p>
            </td>
          </tr>

        </tbody></table>
        <!-- End email card -->

      </td>
    </tr>
  </tbody></table>

</body></html>
```
---

## Design Notes

| Element | Aifyze design token used | Applied here |
|---|---|---|
| Layout | 600px table-based card, MSO-safe, hidden preheader | Same table-based structure as Watts Group email standard |
| Accent bar | Brand gradient `135deg, #7C3AED → #C084FC → #F97066` | Split two-tone bar (`#7C3AED` / `#F97066`) since Outlook doesn't render CSS `linear-gradient` — this is the email-safe equivalent |
| Card background | `--color-bg-secondary` `#FCFBFF` | Same |
| Page background | `--color-bg` `#F7F6FA` | Same |
| Field card background | `--color-bg-deep` `#F0ECF8` | Same, used for contact-details block and footer |
| Border | `--color-border` `#E6E1F0` | Same |
| Headline font | Playfair Display (not email-safe) | Georgia serif fallback, matches CLAUDE.md heading stack |
| Body font | Inter (not email-safe) | Arial/Helvetica fallback, matches CLAUDE.md body stack |
| Primary accent / CTA | `--color-primary` `#7C3AED` | Eyebrow text, field labels' accent border, CTA button background |
| Secondary accent | `--color-secondary` `#F97066` | Second half of top/underline bars |
| Text colors | `--color-text` `#1A1625`, `--color-text-secondary` `#4A4458`, `--color-text-tertiary` `#7A748C` | Headline / body / labels respectively |
| Logo | `https://assets.cdn.filesafe.space/hGfSazDg0icOi6lgiT07/media/69c7c2fa2e89d8b9a366ffa8.png` | Placed top-left of the card body, 132px wide |

## Outstanding Before Use

- [ ] Fill in Ritesh's exact email address in the GHL "To" field of this action (kept out of the template since it's not a contact merge field)
- [ ] Wire this HTML into a new **Send Email** action in `Workflows/contact-form-lead-workflow.md` (Action 3, after the Create/Update Opportunity action)
- [x] Confirmed against a live test contact: `{{contact.organization}}` (standard field, not `business_name`) and `{{contact.style_of_business_mangement}}` (typo'd custom field key, not the correctly-spelled `style_of_business_management` which is a different, unrelated field) — see `Forms/aifyze-contact-form.md`
- [ ] Send a live test to confirm the two-tone accent bars render correctly in Gmail/Outlook
