import { useState, useRef, useEffect, useCallback, useMemo } from "react";

/* ══════════════════════════════════════════════════════════
   STATE JURISDICTION DATA
   ══════════════════════════════════════════════════════════ */

const STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois",
  "Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
  "Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota",
  "Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington",
  "West Virginia","Wisconsin","Wyoming"
];

const STATE_DATA = {
  "Alabama":            { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Alaska":             { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["Alaska follows the English Rule: losing party pays a portion of fees by default under Rule 82."] },
  "Arizona":            { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Arkansas":           { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "California":         { tier: 1, utsa: true, bondWaiver: true, statute: "SB 331", notes: ["5 business day mandatory review period for settlement/separation agreements.", "Non-competes are banned under B&P Code § 16600. NDA must not function as a de facto non-compete.", "AB 692 (2026) bans Stay-or-Pay fees/penalties for leaving employment."] },
  "Colorado":           { tier: 2, utsa: true, bondWaiver: true, statute: "POWR Act (2023)", notes: ["Employer must provide standalone notice of the NDA before the employee starts.", "Non-competes limited to those earning above $130,014 (2026).", "Mandatory attorney fees for employees if employer attempts to enforce an illegal non-compete."] },
  "Connecticut":        { tier: 2, utsa: true, bondWaiver: true, statute: "Public Act 19-16", notes: [] },
  "Delaware":           { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "District of Columbia":{ tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["Non-competes void for workers earning under $162,164 (2026).", "14-day mandatory notice period before signing a non-compete."] },
  "Florida":            { tier: 3, utsa: true, bondWaiver: false, statute: null, notes: ["Bond waivers are generally unenforceable in Florida; the bond requirement is considered jurisdictional.", "Mandatory fee-shifting to the prevailing party in non-compete litigation.", "Courts are prohibited from considering hardship to the employee when enforcing non-competes."] },
  "Georgia":            { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Hawaii":             { tier: 1, utsa: true, bondWaiver: true, statute: "Act 47 (2023)", notes: ["Non-competes banned for technology workers (HRS § 480-4)."] },
  "Idaho":              { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["Idaho law presumes irreparable harm if a key employee violates a non-compete."] },
  "Illinois":           { tier: 1, utsa: true, bondWaiver: true, statute: "Workplace Transparency Act (2026)", notes: ["Employee must be given 14 days to review the agreement.", "Employee must be advised to consult an attorney.", "Non-competes banned for those earning under $75,000 (2026)."] },
  "Indiana":            { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["New 2026 Privacy Law impacts data-handling NDAs."] },
  "Iowa":               { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Kansas":             { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Kentucky":           { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["New 2026 Privacy Law takes effect."] },
  "Louisiana":          { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["Non-compete agreements must specifically name the parishes/municipalities where they apply.", "Maximum non-compete duration is 2 years."] },
  "Maine":              { tier: 2, utsa: true, bondWaiver: true, statute: "LD 965 (2022)", notes: ["Non-competes banned for workers earning under $63,840 (2026)."] },
  "Maryland":           { tier: 2, utsa: true, bondWaiver: true, statute: "Disclosing Sexual Harassment in the Workplace Act", notes: ["Non-competes banned for workers earning under $46,800 (2026)."] },
  "Massachusetts":      { tier: 2, utsa: true, bondWaiver: true, statute: "Non-Compete Act (2018)", notes: ["Non-compete agreements require garden leave (paying 50% salary during restriction).", "Agreement must be signed 10 days before employment begins.", "Harassment NDAs must be employee-revocable for 15 days."] },
  "Michigan":           { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Minnesota":          { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["All non-competes entered into after July 2023 are void. NDAs for trade secrets remain enforceable."] },
  "Mississippi":        { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Missouri":           { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Montana":            { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["Non-competes are effectively banned by statute (§ 28-2-703) with very narrow exceptions."] },
  "Nebraska":           { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["No Blue Penciling: if one part of a restrictive covenant is overbroad, the entire provision is void."] },
  "Nevada":             { tier: 2, utsa: true, bondWaiver: true, statute: "AB 192 (2025/26)", notes: ["Non-competes banned for hourly workers."] },
  "New Hampshire":      { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["Copy of agreement must be provided before offer acceptance.", "Non-competes banned for workers earning under $30,160 (2026)."] },
  "New Jersey":         { tier: 2, utsa: true, bondWaiver: true, statute: "S121", notes: ["Settlement agreements must include a disclaimer that the NDA does not prevent speaking with certain authorities."] },
  "New Mexico":         { tier: 2, utsa: true, bondWaiver: true, statute: "State harassment NDA prohibition", notes: [] },
  "New York":           { tier: 2, utsa: false, bondWaiver: true, statute: "General Obligations Law § 5-336", notes: ["New York has NOT adopted the UTSA; trade secrets are governed by common law.", "21-day review period plus 7-day revocation period for harassment NDAs.", "Bond waivers are strictly scrutinized under CPLR 6312."] },
  "North Carolina":     { tier: 3, utsa: false, bondWaiver: true, statute: null, notes: ["Governed by the NC Trade Secrets Protection Act (similar to UTSA).", "Non-competes must be in writing and signed as part of the initial employment contract for valid consideration."] },
  "North Dakota":       { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["All non-competes are banned (§ 9-08-06)."] },
  "Ohio":               { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Oklahoma":           { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["All non-competes are banned (15 O.S. § 219A)."] },
  "Oregon":             { tier: 1, utsa: true, bondWaiver: true, statute: "Workplace Fairness Act / SB 488", notes: ["Non-competes banned for those earning under $119,541 (2026); maximum duration 12 months.", "Employer must provide a signed copy of the agreement within 30 days of termination."] },
  "Pennsylvania":       { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Rhode Island":       { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["Non-competes banned for low-wage workers earning under $39,900 (2026).", "New 2026 Privacy Law."] },
  "South Carolina":     { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "South Dakota":       { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Tennessee":          { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Texas":              { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["Courts are required to Blue Pencil (reform) overbroad non-competes rather than void them.", "Prevailing party may recover attorney fees."] },
  "Utah":               { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["Non-competes limited to 1 year post-employment.", "HB 508 (2026) impacts bond waivers."] },
  "Vermont":            { tier: 2, utsa: true, bondWaiver: true, statute: "Act 183", notes: [] },
  "Virginia":           { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["Non-competes banned for low-wage workers earning under $78,364 (2026)."] },
  "Washington":         { tier: 1, utsa: true, bondWaiver: true, statute: "Silenced No More Act (ESHB 1795)", notes: ["Non-competes banned for those earning under $126,858 (2026).", "Mandatory attorney fees for employees if employer attempts to enforce a void non-compete.", "The Silenced No More Act has retroactive effect and invalidates older NDAs."] },
  "West Virginia":      { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: [] },
  "Wisconsin":          { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["No Blue Penciling: if one part of a restrictive covenant is overbroad, the entire provision is void."] },
  "Wyoming":            { tier: 3, utsa: true, bondWaiver: true, statute: null, notes: ["Non-competes banned for most employees except key executive personnel (2025/2026)."] },
};

/* ══════════════════════════════════════════════════════════
   DYNAMIC SECTION BUILDERS
   ══════════════════════════════════════════════════════════ */

function getWorkplaceDisclosureSection(state, sectionNum) {
  const data = STATE_DATA[state];
  if (!data) return null;

  if (data.tier === 1) {
    const specifics = {
      "California": `Nothing in this agreement prevents you from discussing or disclosing information about unlawful acts in the workplace, such as harassment or discrimination or any other conduct that you have reason to believe is unlawful. This provision is included pursuant to California Senate Bill 331 (the "Silenced No More Act") and applies to all disclosures relating to conditions in the workplace, including but not limited to harassment, discrimination, or retaliation based on any protected class under California law.`,
      "Washington": `Nothing in this agreement prevents you from discussing or disclosing information about unlawful acts in the workplace, including but not limited to harassment, discrimination, retaliation, wage-and-hour violations, or any other conduct that you have reason to believe is unlawful. This provision is included pursuant to Washington's Silenced No More Act (ESHB 1795), which covers all forms of illegal workplace conduct and applies retroactively to invalidate prior conflicting provisions.`,
      "Illinois": `Nothing in this agreement prevents you from discussing or disclosing information about unlawful employment practices, including but not limited to harassment, discrimination, or retaliation. You have the right to make truthful statements or disclosures regarding any unlawful employment practice. This provision is included pursuant to the Illinois Workplace Transparency Act (as amended 2026).`,
      "Oregon": `Nothing in this agreement prevents you from discussing or disclosing information about harassment, discrimination, or other unlawful conduct in the workplace. You retain the right to discuss workplace conditions and report unlawful behavior without restriction. This provision is included pursuant to the Oregon Workplace Fairness Act (SB 488).`,
      "Hawaii": `Nothing in this agreement prevents you from reporting or disclosing information about sexual harassment or sexual assault to the Hawaii Civil Rights Commission or any other governmental agency. This provision is included pursuant to Hawaii Act 47 (2023).`,
    };
    const verbatim = specifics[state] || specifics["California"];
    return {
      t: `${sectionNum}. Permitted Disclosures Regarding Unlawful Conduct`,
      b: `${verbatim} This Agreement does not limit any party's right to: (a) report suspected violations of law to any governmental agency or entity, including but not limited to the Equal Employment Opportunity Commission, the Department of Labor, the Securities and Exchange Commission, or any state or local agency; (b) participate in any governmental investigation; or (c) file a charge or complaint with any governmental agency.`
    };
  }

  if (data.tier === 2) {
    const statRefs = {
      "Colorado": `the Colorado Protecting Opportunities and Workers' Rights Act (POWR Act), which requires carve-outs for disclosures to government agencies, attorneys, and family members`,
      "Connecticut": `Connecticut Public Act 19-16, which prohibits NDAs in sexual harassment settlements unless specifically requested by the employee`,
      "Maine": `Maine LD 965 (2022), which limits NDAs for discrimination and harassment claims unless part of a settlement requested by the employee`,
      "Maryland": `the Maryland Disclosing Sexual Harassment in the Workplace Act`,
      "Massachusetts": `Massachusetts law governing harassment settlement agreements, which requires such agreements to be mutually agreed upon and employee-revocable for 15 days`,
      "Nevada": `Nevada AB 192 (2025/26), which prevents NDAs from silencing harassment victims`,
      "New Jersey": `New Jersey S121, which prohibits NDAs in harassment and discrimination cases and requires a disclaimer that the NDA does not prevent the employee from speaking with certain authorities`,
      "New Mexico": `New Mexico law prohibiting NDAs regarding sexual harassment`,
      "New York": `New York General Obligations Law § 5-336, which permits NDAs in harassment settlements only if requested by the employee and includes a 21-day review period and 7-day revocation period`,
      "Vermont": `Vermont Act 183, which prohibits NDAs for sexual harassment`,
    };
    const ref = statRefs[state] || "applicable state law";
    return {
      t: `${sectionNum}. Permitted Disclosures Regarding Unlawful Conduct`,
      b: `Nothing in this Agreement prevents or restricts either party, or any individual bound by this Agreement, from discussing or disclosing information about unlawful acts in the workplace, such as harassment, discrimination, or any other conduct that the individual has reason to believe is unlawful. This provision is included in accordance with ${ref}. This Agreement does not limit any party's right to: (a) report suspected violations of law to any governmental agency or entity, including but not limited to the Equal Employment Opportunity Commission, the Department of Labor, the Securities and Exchange Commission, or any state or local agency; (b) participate in any governmental investigation; or (c) file a charge or complaint with any governmental agency.`
    };
  }

  return {
    t: `${sectionNum}. Permitted Disclosures and Government Reporting`,
    b: `Nothing in this Agreement shall be construed to prevent or restrict either party, or any individual bound by this Agreement, from: (a) reporting suspected violations of law to any federal, state, or local governmental agency or entity, including but not limited to the Equal Employment Opportunity Commission, the Department of Labor, the Securities and Exchange Commission, or any state or local law enforcement agency; (b) participating in or cooperating with any governmental investigation or proceeding; (c) filing a charge or complaint with any governmental agency; or (d) making disclosures that are protected under applicable whistleblower provisions of federal, state, or local law. No prior authorization from the Disclosing Party is required for any such reporting or cooperation.`
  };
}

function getRemediesSection(state, sectionNum) {
  const data = STATE_DATA[state];
  const bondWaiverOk = data ? data.bondWaiver : true;

  if (bondWaiverOk) {
    return {
      t: `${sectionNum}. Remedies`,
      b: `The parties acknowledge and agree that any breach or threatened breach of this Agreement may cause the Disclosing Party immediate and irreparable harm for which monetary damages alone would be an inadequate remedy. Accordingly, in the event of any such breach or threatened breach, the Disclosing Party shall be entitled to seek equitable relief, including temporary restraining orders, preliminary and permanent injunctions, and specific performance, without the necessity of proving actual damages and without the requirement of posting any bond or other security, in addition to all other remedies available at law or in equity. The Receiving Party hereby waives any requirement that the Disclosing Party post a bond or other security as a condition for obtaining any such injunctive or equitable relief. In any action to enforce this Agreement, the prevailing party shall be entitled to recover its reasonable attorneys' fees, court costs, and other litigation expenses from the non-prevailing party.`
    };
  }

  return {
    t: `${sectionNum}. Remedies`,
    b: `The parties acknowledge and agree that any breach or threatened breach of this Agreement may cause the Disclosing Party immediate and irreparable harm for which monetary damages alone would be an inadequate remedy. Accordingly, in the event of any such breach or threatened breach, the Disclosing Party shall be entitled to seek equitable relief, including temporary restraining orders, preliminary and permanent injunctions, and specific performance, without the necessity of proving actual damages, in addition to all other remedies available at law or in equity. The parties acknowledge that the State of **STATE** may require the posting of a bond or other security as a condition for obtaining injunctive relief, and such requirements shall be governed by applicable law. In any action to enforce this Agreement, the prevailing party shall be entitled to recover its reasonable attorneys' fees, court costs, and other litigation expenses from the non-prevailing party.`
  };
}

const INFO_CATEGORIES = [
  { key: "trade_secrets", label: "Trade Secrets & Formulas", hint: "secret sauce, methods", legal: "trade secrets, proprietary formulas, and processes not generally known to the public" },
  { key: "source_code", label: "Source Code & Tech Specs", hint: "software, apps", legal: "proprietary source code, algorithms, software architectures, technical specifications, and system designs" },
  { key: "business_strategy", label: "Strategy & Marketing", hint: "rollout plans, strategy", legal: "non-public business strategies, marketing plans, competitive analyses, and strategic roadmaps" },
  { key: "financial", label: "Financial Data & Projections", hint: "budgets, pricing, deals", legal: "financial statements, projections, budgets, pricing models, profit margins, and valuation data" },
  { key: "customer_vendor", label: "Customer & Vendor Data", hint: "client lists, contacts", legal: "customer and vendor lists containing non-public compiled data such as purchasing histories, negotiated pricing, contact preferences, and relationship details" },
  { key: "product_design", label: "Designs & Prototypes", hint: "unreleased work, concepts", legal: "product designs, prototypes, mockups, unpublished patent applications, and invention disclosures" },
  { key: "personnel", label: "Personnel & HR Info", hint: "team info, salaries", legal: "employee records, compensation data, organizational structures, and human resources policies" },
];

function buildCategoryText(selectedKeys, customText) {
  const selected = INFO_CATEGORIES.filter(c => selectedKeys.includes(c.key));
  const parts = selected.map(c => c.legal);
  if (customText && customText.trim()) parts.push(customText.trim());
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  return parts.slice(0, -1).join("; ") + "; and " + parts[parts.length - 1];
}

function buildSections(state, categories, customCategory) {
  let n = 1;
  const sections = [];

  const catText = buildCategoryText(categories || [], customCategory || "");
  const catClause = catText
    ? `Confidential Information includes, but is not limited to, the following categories to the extent they relate to the Purpose: ${catText}.`
    : `Confidential Information includes any proprietary information relating to the Purpose.`;

  sections.push({
    t: `${n}. Definition of Confidential Information`,
    b: `"Confidential Information" means any non-public information disclosed by either party (the "Disclosing Party") to the other party (the "Receiving Party") in connection with the Purpose (defined above), whether orally, in writing, electronically, or by any other means, that is either: (i) marked or designated as "confidential," "proprietary," or with a similar legend at the time of disclosure; or (ii) if disclosed orally or visually, identified as confidential at the time of disclosure and summarized in writing within fifteen (15) business days thereafter. ${catClause} Notwithstanding the foregoing, "Confidential Information" expressly excludes: (a) general professional skills, training, knowledge, and experience that the Receiving Party possessed prior to or develops independently of this Agreement; (b) information that constitutes general industry knowledge readily ascertainable by professionals in the relevant field; and (c) any individual's right to use their education, professional competence, and accumulated expertise in their trade or profession. This Agreement shall not be construed to restrict or limit any party's ability to engage in any lawful profession, trade, or business.`
  });
  n++;

  sections.push({
    t: `${n}. Obligations of the Receiving Party`,
    b: `The Receiving Party agrees to: (a) hold all Confidential Information in strict confidence and treat it with at least the same degree of care it uses to protect its own confidential information, but in no event less than a reasonable standard of care; (b) not disclose Confidential Information to any third party without the prior written consent of the Disclosing Party; (c) limit internal access to Confidential Information to those employees, agents, or advisors who have a demonstrable need to know in connection with the Purpose and who are bound by written confidentiality obligations no less restrictive than those contained herein; (d) use Confidential Information solely for the Purpose stated in this Agreement and for no other purpose whatsoever; (e) promptly notify the Disclosing Party in writing upon discovery of any unauthorized use or disclosure of Confidential Information; and (f) cooperate with the Disclosing Party to remedy any such unauthorized use or disclosure. The Receiving Party shall be responsible for any breach of this Agreement by its employees, agents, or advisors.`
  });
  n++;

  sections.push({
    t: `${n}. Exclusions from Confidential Information`,
    b: `Confidential Information does not include information that: (a) is or becomes publicly available through no fault, act, or omission of the Receiving Party; (b) was already in the Receiving Party's lawful possession prior to disclosure, as evidenced by written records predating receipt; (c) is independently developed by the Receiving Party without reference to or use of any Confidential Information, as demonstrated by contemporaneous documentation; (d) is rightfully received from a third party without any obligation of confidentiality and without restriction on disclosure; or (e) is required to be disclosed by law, regulation, or valid court order, provided that the Receiving Party gives the Disclosing Party prompt written notice of such requirement (to the extent legally permitted) and reasonable opportunity to seek a protective order or other appropriate remedy before any such disclosure is made. In the event of compelled disclosure, only the minimum amount of Confidential Information necessary to comply with the legal obligation shall be disclosed.`
  });
  n++;

  sections.push({
    t: `${n}. Restriction on Use (Non-Use Obligation)`,
    b: `Each party acknowledges that the Confidential Information is disclosed solely for the Purpose identified in this Agreement. The Receiving Party shall not use any Confidential Information for any purpose other than the Purpose, including but not limited to: (a) developing, manufacturing, marketing, or selling any product or service that competes with those of the Disclosing Party; (b) reverse engineering, decompiling, or disassembling any Confidential Information; (c) improving the Receiving Party's own internal processes, products, or services outside the scope of the Purpose; or (d) gaining any commercial advantage not expressly contemplated by this Agreement. Any use of Confidential Information outside the scope of the Purpose shall constitute a material breach of this Agreement.`
  });
  n++;

  sections.push({
    t: `${n}. Term and Survival`,
    b: `This Agreement shall remain in effect for a period of two (2) years from the Effective Date, unless terminated earlier by either party with thirty (30) days prior written notice to the other party. The obligations of confidentiality and non-use set forth in this Agreement shall survive the expiration or termination of this Agreement for an additional period of three (3) years following such expiration or termination, or for so long as the Confidential Information continues to qualify as a trade secret under applicable law, whichever period is longer.`
  });
  n++;

  sections.push({
    t: `${n}. Return and Destruction of Materials`,
    b: `Upon the expiration or termination of this Agreement, or upon written request by the Disclosing Party at any time, the Receiving Party shall promptly: (a) return to the Disclosing Party all tangible materials containing or embodying Confidential Information, including all originals, copies, summaries, and excerpts thereof; (b) permanently delete and destroy all electronic copies of Confidential Information from all systems, devices, and storage media under the Receiving Party's control, including but not limited to local hard drives, portable storage devices, email servers, cloud storage services (such as Google Drive, Dropbox, iCloud, and similar platforms), and any backup or archival systems; (c) remove all Confidential Information from any collaborative platforms, shared repositories, or project management tools; and (d) within ten (10) business days of such request or termination, provide the Disclosing Party with a written certification, signed by an authorized officer or representative of the Receiving Party, confirming that all Confidential Information has been returned or permanently and irretrievably destroyed in accordance with this Section. The Receiving Party may retain one (1) archival copy of Confidential Information solely for legal compliance purposes, provided such copy remains subject to all confidentiality obligations of this Agreement.`
  });
  n++;

  const remedies = getRemediesSection(state, n);
  sections.push(remedies);
  n++;

  const disclosure = getWorkplaceDisclosureSection(state, n);
  if (disclosure) { sections.push(disclosure); n++; }

  sections.push({
    t: `${n}. Federal Whistleblower Immunity Notice`,
    b: `Pursuant to the Defend Trade Secrets Act of 2016 (18 U.S.C. § 1833(b)), the parties are hereby notified as follows: (a) An individual shall not be held criminally or civilly liable under any federal or state trade secret law for the disclosure of a trade secret that is made (i) in confidence to a federal, state, or local government official, either directly or indirectly, or to an attorney, and solely for the purpose of reporting or investigating a suspected violation of law; or (ii) in a complaint or other document filed in a lawsuit or other proceeding, if such filing is made under seal. (b) An individual who files a lawsuit for retaliation by an employer for reporting a suspected violation of law may disclose the employer's trade secrets to the attorney of the individual and use the trade secret information in the court proceeding, if the individual files any document containing the trade secret under seal and does not disclose the trade secret except pursuant to court order. Failure to provide this notice may limit the Disclosing Party's ability to recover exemplary damages or attorneys' fees in a trade secret misappropriation action.`
  });
  n++;

  sections.push({
    t: `${n}. No License or Ownership Transfer`,
    b: `Nothing in this Agreement shall be construed as granting, by implication, estoppel, or otherwise, any license or right to the Receiving Party under any patent, copyright, trademark, trade secret, or other intellectual property right of the Disclosing Party. All Confidential Information remains the exclusive property of the Disclosing Party. Neither the execution of this Agreement nor the disclosure of any Confidential Information hereunder shall constitute or imply any promise, commitment, or obligation by either party to enter into any further agreement, transaction, or business relationship.`
  });
  n++;

  sections.push({
    t: `${n}. Governing Law and Jurisdiction`,
    b: `This Agreement shall be governed by and construed in accordance with the laws of the State of **STATE**, without regard to its conflict of laws principles. Any dispute arising out of or relating to this Agreement shall be submitted to the exclusive jurisdiction of the state and federal courts located in the State of **STATE**, and each party hereby consents to the personal jurisdiction of such courts and waives any objection based on inconvenient forum.`
  });
  n++;

  sections.push({
    t: `${n}. Entire Agreement and Amendments`,
    b: `This Agreement constitutes the entire agreement between the parties concerning the subject matter hereof and supersedes all prior and contemporaneous agreements, understandings, negotiations, and discussions, whether oral or written, between the parties relating to the subject matter of this Agreement. No amendment, modification, or waiver of any provision of this Agreement shall be effective unless made in writing and signed by authorized representatives of both parties. The failure of either party to enforce any provision of this Agreement shall not constitute a waiver of that party's right to enforce that provision or any other provision in the future.`
  });

  return sections;
}

function getComplianceItems(state) {
  const data = STATE_DATA[state];
  if (!data) return [];
  const items = [];
  items.push({ ok: true, label: data.utsa ? "Trade Secret Protection (UTSA)" : "Trade Secret Protection (Common Law)", detail: data.utsa ? "Uniform Trade Secrets Act adopted" : "Governed by state common law" });
  items.push({ ok: true, label: "Federal Whistleblower Notice (DTSA)", detail: "18 U.S.C. § 1833(b) immunity notice included" });
  if (data.tier === 1) items.push({ ok: true, label: `Workplace Disclosure (${data.statute})`, detail: "Mandatory verbatim language included" });
  else if (data.tier === 2) items.push({ ok: true, label: `Workplace Disclosure (${data.statute})`, detail: "State-specific disclosure provisions included" });
  else items.push({ ok: true, label: "Government Reporting Rights", detail: "Best-practice disclosure language included" });
  if (data.bondWaiver) items.push({ ok: true, label: "Bond Waiver", detail: "Enforceable in this state" });
  else items.push({ ok: false, label: "Bond Waiver", detail: "May not be enforceable in this state; language adjusted" });
  items.push({ ok: true, label: "Fee-Shifting Clause", detail: "Prevailing party recovers attorneys' fees" });
  items.push({ ok: true, label: "General Skills Carve-Out", detail: "Protects right to work in profession" });
  return items;
}

/* ══════════════════════════════════════════════════════════
   UTILITY
   ══════════════════════════════════════════════════════════ */

function fmtDate(d) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const test = current ? current + " " + word : word;
    if (ctx.measureText(test).width > maxWidth) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function getSupportedMimeType() {
  if (typeof MediaRecorder === "undefined") return null;
  const types = ["video/mp4;codecs=h264", "video/mp4", "video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm"];
  return types.find(t => { try { return MediaRecorder.isTypeSupported(t); } catch { return false; } }) || null;
}

/* ══════════════════════════════════════════════════════════
   SIGNATURE PAD
   ══════════════════════════════════════════════════════════ */

function SignatureCanvas({ label, canvasRef, onDraw }) {
  const [hasDrawn, setHasDrawn] = useState(false);
  const drawingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    const ctx = canvas.getContext("2d");
    ctx.scale(2, 2);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#0a0f23";

    function getPos(e) {
      const r = canvas.getBoundingClientRect();
      const t = e.touches ? e.touches[0] : e;
      return { x: t.clientX - r.left, y: t.clientY - r.top };
    }
    function onTouchStart(e) { e.preventDefault(); e.stopPropagation(); drawingRef.current = true; setHasDrawn(true); onDraw(); const p = getPos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); }
    function onTouchMove(e) { if (!drawingRef.current) return; e.preventDefault(); e.stopPropagation(); const p = getPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); }
    function onTouchEnd(e) { e.preventDefault(); drawingRef.current = false; }
    function onMouseDown(e) { drawingRef.current = true; setHasDrawn(true); onDraw(); const p = getPos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); }
    function onMouseMove(e) { if (!drawingRef.current) return; const p = getPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); }
    function onMouseUp() { drawingRef.current = false; }

    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd, { passive: false });
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);

    return () => {
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseUp);
    };
  }, []);

  const clear = () => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    setHasDrawn(false);
  };

  const sans = "system-ui, -apple-system, sans-serif";
  const firm = "#0a0f23";
  const autumn = "#fae4cf";

  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: firm, opacity: 0.5, letterSpacing: ".04em", textTransform: "uppercase", fontFamily: sans }}>{label}</span>
        {hasDrawn && <button onClick={clear} style={{ fontSize: 12, color: "#c0392b", background: "none", border: "none", cursor: "pointer", fontWeight: 700, fontFamily: sans }}>Clear</button>}
      </div>
      <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", border: "2px dashed rgba(10,15,35,.2)", background: "#fdf6ef", touchAction: "none" }}>
        <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: 140, touchAction: "none", cursor: "crosshair" }} />
        {!hasDrawn && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", color: "rgba(10,15,35,.55)", fontSize: 15, fontStyle: "italic", fontFamily: "Georgia, serif" }}>
            Sign here
          </div>
        )}
        <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, height: 1, background: "rgba(10,15,35,.15)", pointerEvents: "none" }} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   MAIN APP
   ══════════════════════════════════════════════════════════ */

export default function NDA() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ party1: "", party2: "", purpose: "", state: "", date: new Date().toISOString().split("T")[0], categories: [], customCategory: "" });
  const [sig1Done, setSig1Done] = useState(false);
  const [sig2Done, setSig2Done] = useState(false);
  const [ndaImage, setNdaImage] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);

  /* Video verification state */
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);
  const previewRef = useRef(null);

  const sig1Ref = useRef(null);
  const sig2Ref = useRef(null);

  const up = (f) => (e) => setForm(prev => ({ ...prev, [f]: e.target.value }));
  const toggleCat = (key) => {
    const cats = form.categories.includes(key)
      ? form.categories.filter(k => k !== key)
      : [...form.categories, key];
    setForm(prev => ({ ...prev, categories: cats }));
  };
  const canProceed = form.party1.trim() && form.party2.trim() && form.purpose.trim() && form.state && form.state !== "" && (form.categories.length > 0 || (form.customCategory && form.customCategory.trim()));

  const sections = useMemo(() => buildSections(form.state, form.categories, form.customCategory), [form.state, form.categories, form.customCategory]);
  const compliance = useMemo(() => getComplianceItems(form.state), [form.state]);
  const stateData = STATE_DATA[form.state] || null;

  /* Inject CSS animations and Google Font */
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes recPulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.25; transform: scale(0.8); }
      }
      @keyframes witnessSlideIn {
        from { opacity: 0; transform: translateY(-8px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);

    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Anton&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => { style.remove(); };
  }, []);

  /* Lock body scroll on sign step */
  useEffect(() => {
    if (step === 2) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [step]);

  /* Video: start recording when entering sign step, cleanup when leaving */
  useEffect(() => {
    if (step === 2 && videoEnabled) {
      startRecording();
    }
    return () => {
      if (step === 2) {
        releaseStream();
      }
    };
  }, [step]);

  /* Video: handle toggle change while on sign step */
  useEffect(() => {
    if (step !== 2) return;
    if (videoEnabled) {
      startRecording();
    } else {
      stopAndDiscard();
    }
  }, [videoEnabled]);

  function releaseStream() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
  }

  async function startRecording() {
    if (!navigator.mediaDevices || typeof MediaRecorder === "undefined") {
      setVideoEnabled(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } },
        audio: true,
      });
      streamRef.current = stream;
      if (previewRef.current) {
        previewRef.current.srcObject = stream;
      }
      chunksRef.current = [];
      const mimeType = getSupportedMimeType();
      const options = mimeType ? { mimeType } : {};
      const mr = new MediaRecorder(stream, options);
      mr.ondataavailable = e => { if (e.data && e.data.size > 0) chunksRef.current.push(e.data); };
      mr.onstop = () => {
        const type = mimeType || "video/mp4";
        const blob = new Blob(chunksRef.current, { type });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
      };
      mediaRecorderRef.current = mr;
      mr.start(100);
      setRecording(true);
    } catch (err) {
      console.warn("Camera unavailable:", err);
      setVideoEnabled(false);
    }
  }

  function stopAndSave() {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    releaseStream();
    setRecording(false);
  }

  function stopAndDiscard() {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.ondataavailable = null;
      mediaRecorderRef.current.onstop = null;
      if (mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }
    }
    releaseStream();
    setRecording(false);
  }

  const handleComplete = useCallback(() => {
    stopAndSave();
    generateImage();
  }, [recording]);

  const generateImage = useCallback(() => {
    setGenerating(true);
    setTimeout(() => {
      const scale = 3;
      const W = 650 * scale;
      const margin = 50 * scale;
      const textW = W - margin * 2;
      const c = document.createElement("canvas");
      const ctx = c.getContext("2d");
      const lineH = 16 * scale;
      const headH = 22 * scale;
      const gapH = 10 * scale;
      const sectionGap = 14 * scale;

      c.width = W;
      c.height = 8000 * scale;
      ctx.font = `${12 * scale}px Georgia, serif`;

      let measuredH = margin;
      measuredH += headH * 2 + gapH * 3;

      const fd = fmtDate(form.date);
      const introText = `This Mutual Non-Disclosure Agreement ("Agreement") is entered into as of ${fd} by and between ${form.party1} ("Party A") and ${form.party2} ("Party B"), collectively referred to as the "Parties," for the purpose of: ${form.purpose} (the "Purpose"). Each party may disclose Confidential Information to the other party in connection with the Purpose, and each party may act as both a Disclosing Party and a Receiving Party under this Agreement.`;
      ctx.font = `${12 * scale}px Georgia, serif`;
      const introLines = wrapText(ctx, introText, textW);
      measuredH += introLines.length * lineH + gapH * 2;

      sections.forEach(s => {
        const body = s.b.replace(/\*\*STATE\*\*/g, form.state);
        ctx.font = `bold ${12 * scale}px Georgia, serif`;
        measuredH += lineH + 4 * scale;
        ctx.font = `${11 * scale}px Georgia, serif`;
        const bLines = wrapText(ctx, body, textW);
        measuredH += bLines.length * lineH + sectionGap;
      });
      measuredH += 60 * scale + 120 * scale + margin;

      c.height = measuredH;
      c.width = W;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, W, c.height);

      let y = margin;
      ctx.fillStyle = "#0a0f23";
      ctx.textAlign = "center";
      ctx.font = `bold ${18 * scale}px Georgia, serif`;
      ctx.fillText("MUTUAL NON-DISCLOSURE AGREEMENT", W / 2, y);
      y += headH;
      ctx.font = `${11 * scale}px Georgia, serif`;
      ctx.fillStyle = "#666";
      ctx.fillText("Effective " + fd, W / 2, y);
      y += headH + gapH;

      ctx.textAlign = "left";
      ctx.fillStyle = "#0a0f23";
      ctx.font = `${12 * scale}px Georgia, serif`;
      introLines.forEach(line => { ctx.fillText(line, margin, y); y += lineH; });
      y += gapH * 2;

      sections.forEach(s => {
        const body = s.b.replace(/\*\*STATE\*\*/g, form.state);
        ctx.font = `bold ${12 * scale}px Georgia, serif`;
        ctx.fillStyle = "#0a0f23";
        ctx.fillText(s.t, margin, y);
        y += lineH + 2 * scale;
        ctx.font = `${11 * scale}px Georgia, serif`;
        ctx.fillStyle = "#333";
        const bLines = wrapText(ctx, body, textW);
        bLines.forEach(line => { ctx.fillText(line, margin, y); y += lineH; });
        y += sectionGap;
      });

      y += 10 * scale;
      ctx.strokeStyle = "#ccc";
      ctx.lineWidth = scale;
      ctx.beginPath(); ctx.moveTo(margin, y); ctx.lineTo(W - margin, y); ctx.stroke();
      y += 20 * scale;

      ctx.font = `italic ${11 * scale}px Georgia, serif`;
      ctx.fillStyle = "#444";
      const wLines = wrapText(ctx, "IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.", textW);
      wLines.forEach(line => { ctx.fillText(line, margin, y); y += lineH; });
      y += 20 * scale;

      const sigW = (textW - 20 * scale) / 2;
      const sigH = 50 * scale;
      [sig1Ref, sig2Ref].forEach((ref, i) => {
        const xPos = margin + i * (sigW + 20 * scale);
        if (ref.current) { try { ctx.drawImage(ref.current, xPos, y, sigW, sigH); } catch (e) {} }
        ctx.strokeStyle = "#888"; ctx.lineWidth = scale;
        ctx.beginPath(); ctx.moveTo(xPos, y + sigH + 5 * scale); ctx.lineTo(xPos + sigW, y + sigH + 5 * scale); ctx.stroke();
        ctx.font = `${10 * scale}px Georgia, serif`;
        ctx.fillStyle = "#0a0f23";
        ctx.fillText(i === 0 ? form.party1 : form.party2, xPos, y + sigH + 22 * scale);
        ctx.fillStyle = "#888";
        ctx.fillText(i === 0 ? "Party A" : "Party B", xPos, y + sigH + 36 * scale);
        ctx.fillText("Date: " + fd, xPos, y + sigH + 50 * scale);
      });

      setNdaImage(c.toDataURL("image/png"));
      setGenerating(false);
      setStep(3);
    }, 100);
  }, [form, sections]);

  /* ── Styles ── */
  const sans = "system-ui, -apple-system, sans-serif";
  const firm = "#0a0f23";
  const autumn = "#fae4cf";

  const inputStyle = { width: "100%", padding: "14px 16px", fontSize: 16, border: `2px solid rgba(10,15,35,.12)`, borderRadius: 12, background: "#fff", fontFamily: "Georgia, serif", outline: "none", boxSizing: "border-box" };
  const selectStyle = { ...inputStyle, appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230a0f23' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", paddingRight: 40 };
  const labelStyle = { display: "inline-block", fontSize: 11, fontWeight: 700, color: autumn, background: firm, marginBottom: 6, letterSpacing: ".04em", textTransform: "uppercase", fontFamily: sans, padding: "4px 10px", borderRadius: 6 };
  const btnBase = { width: "100%", padding: "16px", fontSize: 16, fontWeight: 700, border: "none", borderRadius: 14, cursor: "pointer", fontFamily: sans, letterSpacing: ".01em", transition: "transform .1s" };
  const btnP = { ...btnBase, color: autumn, background: firm, boxShadow: "0 4px 18px rgba(10,15,35,.35)" };
  const btnO = { ...btnBase, color: firm, background: "transparent", boxShadow: `inset 0 0 0 2px ${firm}` };
  const btnG = { ...btnBase, color: "#fff", background: "#1a7a5a", boxShadow: "0 4px 18px rgba(26,122,90,.3)" };

  const progress = (
    <div style={{ display: "flex", gap: 6, marginBottom: 22 }}>
      {["Details", "Review", "Sign"].map((s, i) => (
        <div key={s} style={{ flex: 1, textAlign: "center" }}>
          <div style={{ height: 4, borderRadius: 2, background: i <= Math.min(step, 2) ? firm : "rgba(10,15,35,.1)", marginBottom: 5, transition: "background .3s" }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: i <= Math.min(step, 2) ? firm : "rgba(10,15,35,.25)", textTransform: "uppercase", letterSpacing: ".06em", fontFamily: sans }}>{s}</span>
        </div>
      ))}
    </div>
  );

  /* ── Step 0: Details ── */
  if (step === 0) return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: "20px 16px", fontFamily: "Georgia, serif", background: autumn, minHeight: "100dvh" }}>
      {progress}
      <div style={{ textAlign: "center", marginBottom: 26 }}>
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: 14, background: firm, marginBottom: 10 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={autumn} strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 400, color: firm, margin: "0 0 4px", fontFamily: "'Anton', sans-serif", textTransform: "uppercase", letterSpacing: ".02em" }}>Pact NDA</h1>
        <p style={{ fontSize: 14, color: "rgba(10,15,35,.4)", margin: 0, fontFamily: sans }}>Fill in details, review, then sign</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div><label style={labelStyle}>Your Name</label><input style={inputStyle} placeholder="e.g. John Smith" value={form.party1} onChange={up("party1")} /></div>
        <div><label style={labelStyle}>Their Name</label><input style={inputStyle} placeholder="e.g. Sarah Johnson" value={form.party2} onChange={up("party2")} /></div>
        <div>
          <label style={labelStyle}>What Are You Protecting?</label>
          <div style={{ background: firm, borderRadius: 12, padding: "12px 14px" }}>
            {INFO_CATEGORIES.map(cat => {
              const active = form.categories.includes(cat.key);
              return (
                <div key={cat.key} onClick={() => toggleCat(cat.key)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid rgba(250,228,207,.1)", cursor: "pointer", userSelect: "none" }}>
                  <div style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0, border: active ? "none" : "2px solid rgba(250,228,207,.3)", background: active ? autumn : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .15s" }}>
                    {active && <svg width="12" height="12" viewBox="0 0 12 12"><polyline points="2.5 6 5 8.5 9.5 3.5" fill="none" stroke={firm} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  <span style={{ fontSize: 13, color: active ? autumn : "rgba(250,228,207,.6)", fontFamily: sans, fontWeight: active ? 600 : 400, transition: "all .15s" }}>
                    {cat.label} <span style={{ fontWeight: 400, opacity: 0.5 }}>[{cat.hint}]</span>
                  </span>
                </div>
              );
            })}
            <div style={{ paddingTop: 8 }}>
              <div onClick={() => { if (!form.customCategory && form.customCategory !== "") setForm(prev => ({ ...prev, customCategory: " " })); }} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", userSelect: "none", marginBottom: form.customCategory !== "" ? 8 : 0 }}>
                <div style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0, border: form.customCategory && form.customCategory.trim() ? "none" : "2px solid rgba(250,228,207,.3)", background: form.customCategory && form.customCategory.trim() ? autumn : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {form.customCategory && form.customCategory.trim() && <svg width="12" height="12" viewBox="0 0 12 12"><polyline points="2.5 6 5 8.5 9.5 3.5" fill="none" stroke={firm} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <span style={{ fontSize: 13, color: form.customCategory && form.customCategory.trim() ? autumn : "rgba(250,228,207,.6)", fontFamily: sans }}>Other <span style={{ fontWeight: 400, opacity: 0.5 }}>[something not listed]</span></span>
              </div>
              {form.customCategory !== "" && (
                <input style={{ ...inputStyle, background: "rgba(250,228,207,.08)", color: autumn, border: "2px solid rgba(250,228,207,.15)", fontSize: 14, padding: "10px 12px" }} placeholder="e.g. Recipe formulations and ingredient sourcing" value={form.customCategory.trim() === "" ? "" : form.customCategory} onChange={(e) => setForm(prev => ({ ...prev, customCategory: e.target.value }))} autoFocus />
              )}
            </div>
          </div>
          <span style={{ fontSize: 11, color: "rgba(10,15,35,.35)", marginTop: 4, display: "block", fontFamily: sans }}>Pick at least one</span>
        </div>
        <div><label style={labelStyle}>What Are You Sharing?</label><input style={inputStyle} placeholder="e.g. Discussing my app idea" value={form.purpose} onChange={up("purpose")} /></div>
        <div>
          <label style={labelStyle}>Your State</label>
          <select style={selectStyle} value={form.state} onChange={up("state")}>
            <option value="">Select a state...</option>
            {STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div><label style={labelStyle}>Start Date</label><input style={inputStyle} type="date" value={form.date} onChange={up("date")} /></div>
      </div>
      <button style={{ ...btnP, marginTop: 24, opacity: canProceed ? 1 : .4, pointerEvents: canProceed ? "auto" : "none" }} onClick={() => setStep(1)}>Review Agreement &rarr;</button>
    </div>
  );

  /* ── Step 1: Review ── */
  if (step === 1) {
    const fd = fmtDate(form.date);
    return (
      <div style={{ maxWidth: 500, margin: "0 auto", padding: "20px 16px", fontFamily: "Georgia, serif" }}>
        {progress}

        {compliance.length > 0 && (
          <div style={{ background: firm, borderRadius: 14, marginBottom: 16, overflow: "hidden" }}>
            <div onClick={() => setComplianceOpen(!complianceOpen)} style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", userSelect: "none" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: autumn, textTransform: "uppercase", letterSpacing: ".06em", fontFamily: sans }}>{form.state} Compliance</div>
              <svg width="14" height="14" viewBox="0 0 14 14" style={{ transition: "transform .2s", transform: complianceOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M3 5.5l4 4 4-4" fill="none" stroke={autumn} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {complianceOpen && (
              <div style={{ padding: "0 16px 14px" }}>
                {compliance.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: i < compliance.length - 1 ? 7 : 0 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 2 }}>
                      {item.ok ? (<><circle cx="7" cy="7" r="7" fill={autumn}/><polyline points="4 7.2 6 9.2 10 4.8" fill="none" stroke={firm} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></>) : (<><circle cx="7" cy="7" r="7" fill="rgba(250,228,207,.3)"/><path d="M7 4v3.5M7 9.5v0" stroke={autumn} strokeWidth="1.5" strokeLinecap="round"/></>)}
                    </svg>
                    <div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: autumn, fontFamily: sans }}>{item.label}</span>
                      <span style={{ fontSize: 11, color: "rgba(250,228,207,.55)", marginLeft: 6, fontFamily: sans }}>{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {stateData && stateData.notes.length > 0 && (
          <div style={{ background: autumn, borderRadius: 14, marginBottom: 16, border: "1px solid rgba(10,15,35,.08)", overflow: "hidden" }}>
            <div onClick={() => setNotesOpen(!notesOpen)} style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", userSelect: "none" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: firm, opacity: 0.5, textTransform: "uppercase", letterSpacing: ".06em", fontFamily: sans }}>{form.state} Notes</div>
              <svg width="14" height="14" viewBox="0 0 14 14" style={{ transition: "transform .2s", transform: notesOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M3 5.5l4 4 4-4" fill="none" stroke={firm} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
              </svg>
            </div>
            {notesOpen && (
              <div style={{ padding: "0 16px 14px" }}>
                {stateData.notes.map((note, i) => (
                  <div key={i} style={{ fontSize: 12, color: "rgba(10,15,35,.7)", marginBottom: i < stateData.notes.length - 1 ? 6 : 0, lineHeight: 1.5, fontFamily: sans, paddingLeft: 14, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: firm, opacity: 0.35 }}>•</span>
                    {note}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(10,15,35,.08)", padding: "22px 18px", boxShadow: "0 2px 16px rgba(10,15,35,.04)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, textAlign: "center", margin: "0 0 2px", color: firm }}>MUTUAL NON-DISCLOSURE AGREEMENT</h2>
          <p style={{ textAlign: "center", fontSize: 13, color: "rgba(10,15,35,.35)", margin: "0 0 16px", fontFamily: sans }}>Effective {fd}</p>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#1a1e30", marginBottom: 16 }}>
            This Mutual Non-Disclosure Agreement ("Agreement") is entered into as of <strong>{fd}</strong> by and between <strong>{form.party1}</strong> ("Party A") and <strong>{form.party2}</strong> ("Party B"), collectively referred to as the "Parties," for the purpose of: <strong>{form.purpose}</strong> (the "Purpose"). Each party may disclose Confidential Information to the other party in connection with the Purpose, and each party may act as both a Disclosing Party and a Receiving Party under this Agreement.
          </p>
          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, margin: "0 0 3px", color: firm }}>{s.t}</h3>
              <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "rgba(10,15,35,.6)", margin: 0 }}>{s.b.replace(/\*\*STATE\*\*/g, form.state)}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
          <button style={{ ...btnO, flex: 1, background: firm, color: autumn, boxShadow: "none", border: "none" }} onClick={() => setStep(0)}>&larr; Back</button>
          <button style={{ ...btnP, flex: 2, background: autumn, color: firm }} onClick={() => setStep(2)}>Sign &rarr;</button>
        </div>
      </div>
    );
  }

  /* ── Step 2: Sign ── */
  if (step === 2) {
    const supportsVideo = typeof MediaRecorder !== "undefined" && !!(navigator.mediaDevices);

    return (
      <div style={{ maxWidth: 500, margin: "0 auto", padding: "20px 16px", fontFamily: "Georgia, serif", touchAction: "none", overscrollBehavior: "none" }}>
        {progress}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <h2 style={{ fontSize: 21, fontWeight: 700, color: firm, margin: "0 0 4px" }}>Sign the Agreement</h2>
          <p style={{ fontSize: 14, color: "rgba(10,15,35,.4)", margin: 0, fontFamily: sans }}>Both parties sign below</p>
        </div>

        {/* Video verification toggle */}
        {supportsVideo && (
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: firm, borderRadius: 14, padding: "14px 16px", marginBottom: 14,
            boxShadow: "0 2px 14px rgba(10,15,35,.2)",
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: autumn, fontFamily: sans, letterSpacing: ".01em" }}>
                Record signing session
              </div>
              <div style={{ fontSize: 11, color: "rgba(250,228,207,.45)", fontFamily: sans, marginTop: 2 }}>
                Front camera · Stored on your device
              </div>
            </div>
            <div
              onClick={() => setVideoEnabled(v => !v)}
              style={{
                width: 46, height: 27, borderRadius: 14,
                background: videoEnabled ? autumn : "rgba(250,228,207,.15)",
                position: "relative", cursor: "pointer",
                transition: "background .25s",
                flexShrink: 0,
              }}
            >
              <div style={{
                position: "absolute", top: 3.5,
                left: videoEnabled ? 22 : 3.5,
                width: 20, height: 20, borderRadius: "50%",
                background: videoEnabled ? firm : "rgba(250,228,207,.45)",
                transition: "left .25s, background .25s",
                boxShadow: "0 1px 5px rgba(0,0,0,.35)",
              }} />
            </div>
          </div>
        )}

        {/* Witness camera frame */}
        {supportsVideo && videoEnabled && (
          <div style={{
            position: "relative", borderRadius: 14, overflow: "hidden",
            marginBottom: 14, background: "#050810",
            border: `1px solid rgba(10,15,35,.4)`,
            boxShadow: "0 6px 28px rgba(10,15,35,.3)",
            animation: "witnessSlideIn .3s ease-out",
          }}>
            <video
              ref={previewRef}
              autoPlay
              muted
              playsInline
              style={{ width: "100%", height: 190, objectFit: "cover", transform: "scaleX(-1)", display: "block" }}
            />
            {/* Vignette for witness-frame depth */}
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at center, transparent 45%, rgba(5,8,16,.55) 100%)",
              pointerEvents: "none",
            }} />
            {/* Corner brackets */}
            {[["top:8px;left:8px", "0 4px 4px 0", "4px 0 0 4px"], ["top:8px;right:8px", "0 4px 0 4px", "4px 4px 0 0"], ["bottom:8px;left:8px", "4px 0 4px 0", "0 4px 4px 0"], ["bottom:8px;right:8px", "4px 0 0 4px", "0 0 4px 4px"]].map(([pos], i) => {
              const positions = [{ top: 8, left: 8 }, { top: 8, right: 8 }, { bottom: 8, left: 8 }, { bottom: 8, right: 8 }];
              return (
                <div key={i} style={{
                  position: "absolute",
                  ...positions[i],
                  width: 14, height: 14,
                  borderColor: "rgba(250,228,207,.35)",
                  borderStyle: "solid",
                  borderWidth: i === 0 ? "1.5px 0 0 1.5px" : i === 1 ? "1.5px 1.5px 0 0" : i === 2 ? "0 0 1.5px 1.5px" : "0 1.5px 1.5px 0",
                  pointerEvents: "none",
                }} />
              );
            })}
            {/* REC badge */}
            {recording && (
              <div style={{
                position: "absolute", top: 10, right: 10,
                display: "flex", alignItems: "center", gap: 5,
                background: "rgba(5,8,16,.72)",
                borderRadius: 20, padding: "4px 9px",
              }}>
                <div style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#c0392b",
                  animation: "recPulse 1.4s ease-in-out infinite",
                }} />
                <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.8)", letterSpacing: ".12em", fontFamily: sans }}>REC</span>
              </div>
            )}
            {/* Witness label */}
            <div style={{
              position: "absolute", bottom: 9, left: 12,
              fontSize: 10, color: "rgba(250,228,207,.35)",
              fontFamily: sans, letterSpacing: ".09em",
              fontWeight: 600, textTransform: "uppercase",
              pointerEvents: "none",
            }}>
              Witness Recording
            </div>
          </div>
        )}

        {/* Signature pads */}
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(10,15,35,.08)", padding: "18px 14px", boxShadow: "0 2px 16px rgba(10,15,35,.04)" }}>
          <SignatureCanvas label={`${form.party1} (Party A)`} canvasRef={sig1Ref} onDraw={() => setSig1Done(true)} />
          <SignatureCanvas label={`${form.party2} (Party B)`} canvasRef={sig2Ref} onDraw={() => setSig2Done(true)} />
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
          <button style={{ ...btnO, flex: 1, background: firm, color: autumn, boxShadow: "none", border: "none" }} onClick={() => { stopAndDiscard(); setStep(1); }}>&larr; Back</button>
          <button style={{ ...btnG, flex: 2 }} onClick={handleComplete}>
            {generating ? "Generating\u2026" : "Complete \u2713"}
          </button>
        </div>
        <p style={{ fontSize: 11, color: "rgba(10,15,35,.3)", textAlign: "center", marginTop: 12, lineHeight: 1.5, fontFamily: sans }}>
          By signing, both parties agree to be bound by the terms of this NDA.
        </p>
      </div>
    );
  }

  /* ── Step 3: Done ── */
  if (step === 3) {
    const fd = fmtDate(form.date);
    const safeName1 = form.party1.replace(/\s+/g, "_");
    const safeName2 = form.party2.replace(/\s+/g, "_");

    return (
      <div style={{ maxWidth: 500, margin: "0 auto", padding: "20px 16px", fontFamily: "Georgia, serif" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: "50%", background: "#1a7a5a", boxShadow: "0 4px 20px rgba(26,122,90,.3)", marginBottom: 12 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: firm, margin: "0 0 6px" }}>Agreement Signed</h2>
          <p style={{ fontSize: 14, color: "rgba(10,15,35,.55)", margin: "0 0 4px", lineHeight: 1.6, fontFamily: sans }}>
            <strong style={{ color: firm }}>Long-press the image below</strong> to save or share
          </p>
          <p style={{ fontSize: 12, color: "rgba(10,15,35,.3)", margin: 0, fontFamily: sans }}>
            iOS: "Add to Photos" or "Share" &nbsp;|&nbsp; Desktop: right-click &rarr; Save
          </p>
        </div>

        {/* Signed document PNG */}
        {ndaImage && (
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(10,15,35,.08)", boxShadow: "0 2px 20px rgba(10,15,35,.06)", marginBottom: 16 }}>
            <img src={ndaImage} alt="Signed NDA Document" style={{ width: "100%", display: "block" }} />
          </div>
        )}

        {/* Witness recording card */}
        {videoURL && (
          <div style={{
            background: "#fff", borderRadius: 16,
            border: "1px solid rgba(10,15,35,.08)",
            overflow: "hidden", marginBottom: 16,
            boxShadow: "0 2px 16px rgba(10,15,35,.04)",
          }}>
            {/* Card header */}
            <div style={{
              padding: "13px 16px 11px",
              borderBottom: "1px solid rgba(10,15,35,.06)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: firm, fontFamily: sans, letterSpacing: ".06em", textTransform: "uppercase" }}>
                  Witness Recording
                </div>
                <div style={{ fontSize: 11, color: "rgba(10,15,35,.35)", fontFamily: sans, marginTop: 2 }}>
                  {form.party2} &middot; {fd}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#edfaf4", borderRadius: 20, padding: "4px 10px" }}>
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <circle cx="5" cy="5" r="5" fill="#1a7a5a"/>
                  <polyline points="2.5 5 4 6.5 7.5 3" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#1a7a5a", fontFamily: sans, letterSpacing: ".05em" }}>CAPTURED</span>
              </div>
            </div>
            {/* Video player */}
            <video
              src={videoURL}
              controls
              playsInline
              style={{ width: "100%", display: "block", background: "#050810", maxHeight: 230 }}
            />
            {/* Save button */}
            <div style={{ padding: "10px 14px" }}>
              <a
                href={videoURL}
                download={`Pact_${safeName1}_${safeName2}_${form.date}.mp4`}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "11px", borderRadius: 10,
                  background: firm, color: autumn,
                  fontSize: 13, fontWeight: 700, fontFamily: sans,
                  textDecoration: "none", letterSpacing: ".02em",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Save Recording
              </a>
            </div>
          </div>
        )}

        {/* Summary card */}
        <div style={{ background: autumn, borderRadius: 14, padding: 18, marginBottom: 20, border: "1px solid rgba(10,15,35,.06)" }}>
          {[
            ["Parties", `${form.party1} & ${form.party2}`],
            ["Purpose", form.purpose],
            ["Type", "Mutual NDA"],
            ["Duration", "2 years + 3 year survival"],
            ["Governing Law", `State of ${form.state}`],
            ["Sections", `${sections.length}`],
            ["Date", fd],
            ...(videoURL ? [["Verification", "Signature + Video"]] : [["Verification", "Signature"]]),
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid rgba(10,15,35,.07)", fontSize: 13, fontFamily: sans }}>
              <span style={{ color: "rgba(10,15,35,.4)" }}>{k}</span>
              <span style={{ color: firm, fontWeight: 600, textAlign: "right", maxWidth: "60%" }}>{v}</span>
            </div>
          ))}
        </div>

        <button style={btnO} onClick={() => {
          if (videoURL) URL.revokeObjectURL(videoURL);
          setStep(0);
          setForm({ party1: "", party2: "", purpose: "", state: "", date: new Date().toISOString().split("T")[0], categories: [], customCategory: "" });
          setSig1Done(false);
          setSig2Done(false);
          setNdaImage(null);
          setVideoURL(null);
          setRecording(false);
          setComplianceOpen(false);
          setNotesOpen(false);
        }}>
          Create Another NDA
        </button>
      </div>
    );
  }
}
