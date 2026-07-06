# ET-02 (HTML) — Contact Form — Acknowledgment to Contact

**Template Name in GHL:** `ET-02 — Aifyze Contact Form Acknowledgment`
**Used In:** `Workflows/contact-form-lead-workflow.md` (add as a new Send Email action)
**Sent To:** The contact who submitted the Aifyze website Contact Form
**Trigger:** Same as the rest of the workflow — website Contact Form submitted

**Subject:**
```
Thanks for reaching out, {{contact.first_name}}
```

> Copy everything inside the code block below and paste it into GHL's HTML editor (Send Email action → switch to HTML/code view).

---
```html
<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
  <title>Thanks for Reaching Out</title>
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
      .step-table td { display: block !important; width: 100% !important; padding-right: 0 !important; padding-bottom: 14px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#F7F6FA;width:100%;"><div style="display:none;font-size:1px;color:#F7F6FA;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">We got your message — here's what happens next.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>

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
            <td style="padding:36px 46px 0;text-align:center;">
              <img src="https://assets.cdn.filesafe.space/hGfSazDg0icOi6lgiT07/media/69c7c2fa2e89d8b9a366ffa8.png" width="140" alt="Aifyze" style="display:inline-block;width:140px;max-width:140px;height:auto;">
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="email-body" style="padding:28px 46px 8px;">

              <!-- Eyebrow -->
              <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#7C3AED;font-weight:700;text-align:center;">Aifyze &nbsp;·&nbsp; We AI-fy You</p>

              <!-- Headline -->
              <h1 class="hero-title" style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.25;color:#1A1625;font-weight:700;text-align:center;">Got Your Message</h1>

              <!-- Accent bar (two-tone, centered) -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:0 auto 32px;"><tbody><tr>
                <td width="22" style="background-color:#7C3AED;height:3px;line-height:3px;font-size:0;">&nbsp;</td>
                <td width="22" style="background-color:#F97066;height:3px;line-height:3px;font-size:0;">&nbsp;</td>
              </tr></tbody></table>

              <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.8;color:#4A4458;">Hi {{contact.first_name}},</p>
              <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.8;color:#4A4458;">Thanks for telling us a bit about {{contact.company_name}}. We review every inquiry personally, and someone from our team will reach out within <strong style="color:#1A1625;">1 business day</strong> to schedule your Free AI Audit.</p>
              <p style="margin:0 0 32px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.8;color:#4A4458;">In the meantime, here's what to expect once we connect:</p>

              <!-- 3-step process -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="step-table" style="margin-bottom:36px;">
                <tbody><tr>
                  <td width="33.3%" valign="top" style="padding-right:14px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#F0ECF8;border:1px solid #E6E1F0;border-radius:8px;">
                      <tbody><tr><td style="padding:18px 16px;">
                        <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#7C3AED;font-weight:700;">01</p>
                        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#1A1625;font-weight:700;">Discovery</p>
                        <p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12.5px;line-height:1.6;color:#7A748C;">We listen & understand your workflows</p>
                      </td></tr></tbody>
                    </table>
                  </td>
                  <td width="33.3%" valign="top" style="padding-right:14px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#F0ECF8;border:1px solid #E6E1F0;border-radius:8px;">
                      <tbody><tr><td style="padding:18px 16px;">
                        <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#7C3AED;font-weight:700;">02</p>
                        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#1A1625;font-weight:700;">Strategy</p>
                        <p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12.5px;line-height:1.6;color:#7A748C;">A tailored AI roadmap, built for you</p>
                      </td></tr></tbody>
                    </table>
                  </td>
                  <td width="33.3%" valign="top">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#F0ECF8;border:1px solid #E6E1F0;border-radius:8px;">
                      <tbody><tr><td style="padding:18px 16px;">
                        <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#7C3AED;font-weight:700;">03</p>
                        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#1A1625;font-weight:700;">Implementation</p>
                        <p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12.5px;line-height:1.6;color:#7A748C;">Built & deployed with zero disruption</p>
                      </td></tr></tbody>
                    </table>
                  </td>
                </tr></tbody>
              </table>

              <!-- Divider -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tbody><tr><td style="border-top:1px solid #E6E1F0;height:1px;font-size:0;line-height:0;">&nbsp;</td></tr></tbody></table>
              <div style="height:28px;line-height:28px;font-size:0;">&nbsp;</div>

              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.8;color:#4A4458;">Talk soon,</p>
              <p style="margin:0 0 4px;font-family:Georgia,'Times New Roman',serif;font-size:20px;line-height:1.2;color:#1A1625;font-weight:700;">The Aifyze Team</p>
              <p style="margin:0 0 28px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.7;color:#7A748C;">AI Consulting &amp; Strategy Experts<br><a href="https://aifyze.com" style="color:#7C3AED;text-decoration:none;">aifyze.com</a></p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 46px;background-color:#F0ECF8;border-top:1px solid #E6E1F0;text-align:center;">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#7A748C;letter-spacing:0.5px;">Aifyze &nbsp;·&nbsp; a division of Watts Group</p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#7A748C;letter-spacing:0.3px;">Suite 209, 120 Traders Blvd E, Mississauga, Ontario, L4Z 2H7, Canada &nbsp;·&nbsp; +1 (579) 569 9999</p>
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
| Layout | 600px table-based card, MSO-safe, hidden preheader | Same structure as ET-01, centered/customer-facing variant |
| Accent bar | Brand gradient `135deg, #7C3AED → #C084FC → #F97066` | Two-tone bar (`#7C3AED` / `#F97066`), top and under-headline — email-safe stand-in for the CSS gradient |
| Card / page background | `--color-bg-secondary` `#FCFBFF` / `--color-bg` `#F7F6FA` | Same |
| 3-step "Process" teaser | Aifyze's 4-step process (Discovery → Strategy → Implementation → Optimization) | Trimmed to the first 3 steps to keep the email short — full process lives on-site |
| Step card background | `--color-bg-deep` `#F0ECF8` | Same |
| Headline / step numerals font | Playfair Display (not email-safe) | Georgia serif fallback |
| Body font | Inter (not email-safe) | Arial/Helvetica fallback |
| Sign-off | CLAUDE.md author block convention | "The Aifyze Team" / "AI Consulting & Strategy Experts" |
| Footer | Company contact block | Suite 209, 120 Traders Blvd E, Mississauga, Ontario, L4Z 2H7, Canada · +1 (579) 569 9999 |
| Logo | `https://assets.cdn.filesafe.space/hGfSazDg0icOi6lgiT07/media/69c7c2fa2e89d8b9a366ffa8.png` | Centered top of card, 140px wide |

## Outstanding Before Use

- [ ] Wire this HTML into a new **Send Email** action in `Workflows/contact-form-lead-workflow.md` (Action 4, after the internal notification to Ritesh)
- [ ] Confirm `{{contact.first_name}}` populates correctly from the form's single "Name" field (GHL auto-splits Full Name into first_name/last_name standard fields — verify on a live test submission)
- [x] Confirmed against a live test contact: `{{contact.company_name}}` is the correct standard field for Business Name (not the custom `business_name` field, which stays empty) — see `Forms/aifyze-contact-form.md`
- [ ] Send a live test to confirm the 3-step row stacks cleanly on mobile (see `.step-table` responsive rule) and the two-tone bars render in Gmail/Outlook
