# NON-COMPETE AGREEMENT ENFORCEABILITY ANALYSIS
## All 50 States + District of Columbia | Reference Date: April 2026

> **DISCLAIMER**: This document is an informational legal analysis, not legal advice. It reflects the state of law as understood through early 2025 training data with noted projections through April 2026. Specific provisions, thresholds (especially inflation-adjusted figures), and recent legislative changes should be independently verified with qualified legal counsel in each jurisdiction before reliance. Employment law changes rapidly; several states had pending legislation at the time of this analysis.

> **FTC FEDERAL RULE STATUS (as of 2026)**: The FTC finalized a near-total ban on non-compete agreements in April 2024, with a September 2024 effective date. In August 2024, the US District Court for the Northern District of Texas (*Ryan LLC v. FTC*, No. 3:24-cv-00986) issued a nationwide injunction blocking the rule, holding that the FTC exceeded its statutory authority. The rule never took effect. Under the administration that took office in January 2025, the FTC has not pursued reinstatement. **For practical purposes, the federal non-compete ban is dead.** State law remains the operative framework.

---

## HOW TO USE THIS DOCUMENT

Each jurisdiction entry contains:
1. **Narrative analysis** of all 10 required fields with doctrinal reasoning
2. **A parseable JSON block** at the end of each entry for direct integration into contract-generation logic

The JSON blocks use these enumerated values:
- `enforceability`: `"banned"` | `"banned_conditional"` | `"enforceable_restricted"` | `"generally_enforceable"`
- `blue_pencil`: `"reformation"` | `"strict_void"` | `"hybrid"`
- `salary_threshold_type`: `null` | `"annual"` | `"hourly"` | `"weekly_wage"`
- `consideration_posthire`: `"continued_employment"` | `"independent_required"` | `"statutory"` | `"unclear"`

---

# PART I: JURISDICTION-BY-JURISDICTION ANALYSIS

---

## ALABAMA

### 1. Enforceability Status
**Generally enforceable.** Alabama follows the common law reasonableness framework. Non-competes are enforceable if they protect a legitimate business interest, are reasonable in scope, duration, and geographic area, and are supported by adequate consideration. Ala. Code § 8-1-190 et seq. provides a statutory framework that codifies reasonableness principles. Alabama is considered an employer-friendly jurisdiction.

### 2. Salary/Income Thresholds
**None.** Alabama does not impose any salary or income threshold for non-compete enforceability. Non-competes may be applied to employees at any compensation level.

### 3. Maximum Duration
**No statutory cap.** Courts evaluate duration under the reasonableness standard. Judicially, 2 years is generally considered the outer boundary of reasonableness for most industries. Restrictions of 1 year are routinely upheld. Restrictions exceeding 2 years face significant scrutiny and are rarely enforced absent extraordinary protectable interests (e.g., sale of a business).

### 4. Geographic Scope Requirements
Courts require geographic restrictions to be reasonable and tied to the employer's actual business territory. Nationwide restrictions have been upheld where the employer operates nationally, but courts are skeptical of geographic scope that exceeds the employee's actual area of responsibility. Industry-specific restrictions (rather than geographic) are sometimes used as an alternative and are analyzed under the same reasonableness standard.

### 5. Consideration Requirements
**Continued employment suffices at hire.** For agreements signed at the commencement of employment, the employment itself is adequate consideration. For post-hire agreements, Alabama courts have generally held that continued at-will employment for a reasonable period constitutes sufficient consideration, though some decisions suggest that additional consideration (promotion, raise, access to confidential information) strengthens enforceability. The safest practice is to provide independent consideration for post-hire agreements.

### 6. Blue Pencil Doctrine
**Reformation.** Alabama courts follow the blue pencil (reformation) approach under Ala. Code § 8-1-196. Courts may modify overbroad restrictions to make them reasonable rather than voiding the entire covenant. This gives employers a second chance but is not guaranteed; courts retain discretion to refuse reformation in cases of egregious overreach or bad faith.

### 7. Required Notice Periods
**None.** Alabama has no statutory requirement for advance notice before presenting a non-compete agreement. However, providing notice is considered a best practice, and some courts may view a "sign now or be fired" scenario as relevant to the voluntariness of the agreement.

### 8. Specific Exemptions
**Limited statutory exemptions.** Alabama does not have broad categorical exemptions. Attorneys are generally exempt from non-competes under Alabama Rules of Professional Conduct (mirroring ABA Model Rule 5.6). Physicians may face public policy challenges depending on the restriction's impact on patient access, though there is no statutory physician exemption.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes to Alabama's non-compete framework have been enacted in the 2023-2026 window. Alabama's statutory framework (Ala. Code § 8-1-190 through 8-1-197, enacted 2015) remains the operative law. The state has not pursued California-style or Colorado-style reform.

### 10. Key Case Law
**Ormco Corp. v. Johns, 869 So. 2d 1109 (Ala. 2003)**: Established the modern framework for analyzing non-compete reasonableness in Alabama, emphasizing the three-part test (legitimate interest, reasonable scope, adequate consideration). Remains the leading authority.

**James S. Kemper & Co. v. Cox & Associates, 434 So. 2d 1380 (Ala. 1983)**: Early foundational case establishing that non-competes are enforceable in Alabama when reasonably limited, and that courts should analyze the totality of the restriction rather than any single factor in isolation.

```json
{
  "jurisdiction": "AL",
  "jurisdiction_name": "Alabama",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test", "legitimate_business_interest_required"],
  "statutory_framework": "Ala. Code § 8-1-190 et seq."
}
```

---

## ALASKA

### 1. Enforceability Status
**Generally enforceable.** Alaska has no specific non-compete statute and relies on common law reasonableness principles. Non-competes are enforceable if they are reasonable in duration, geographic scope, and activity restriction, and if they protect a legitimate business interest. Alaska courts analyze non-competes under general contract principles with a reasonableness overlay.

### 2. Salary/Income Thresholds
**None.** No salary or income threshold applies.

### 3. Maximum Duration
**No statutory cap.** Courts evaluate reasonableness case by case. Restrictions of 1 to 2 years are generally considered reasonable. Alaska's limited case law does not provide a bright-line maximum, but restrictions exceeding 2 years would face heavy scrutiny.

### 4. Geographic Scope Requirements
Geographic restrictions must be reasonable and connected to the employer's operational area. Given Alaska's unique geography (isolated communities, vast distances), courts are likely to scrutinize geographic scope carefully. Statewide restrictions may be reasonable for statewide businesses; nationwide restrictions would require nationwide operations and a demonstrated need.

### 5. Consideration Requirements
**Continued employment generally suffices.** At hire, employment is adequate consideration. For post-hire agreements, the case law is thin, but continued at-will employment for a reasonable period is likely sufficient. Independent consideration is the safer approach for post-hire agreements.

### 6. Blue Pencil Doctrine
**Reformation.** Alaska courts generally follow the reformation approach, modifying overbroad restrictions to make them reasonable. However, case law is limited.

### 7. Required Notice Periods
**None.** No statutory notice requirement.

### 8. Specific Exemptions
**No specific statutory exemptions** beyond the general attorney exemption under the Alaska Rules of Professional Conduct (Rule 5.6).

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes in the 2023-2026 period. Alaska has not enacted non-compete reform legislation.

### 10. Key Case Law
**Data I/O Corp. v. Holt (unreported but frequently cited in Alaska practice)**: Establishes that Alaska courts apply the standard three-part reasonableness test. Alaska's limited case law means practitioners often look to Washington State case law for persuasive authority given geographic and economic similarities.

```json
{
  "jurisdiction": "AK",
  "jurisdiction_name": "Alaska",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test"],
  "statutory_framework": null
}
```

---

## ARIZONA

### 1. Enforceability Status
**Generally enforceable.** Arizona enforces non-competes under its restraint of trade statutes (A.R.S. § 44-1401 et seq.) and common law. The state follows a reasonableness test: the restriction must protect a legitimate business interest, be reasonable in scope and duration, and not impose undue hardship on the employee. Arizona is moderately employer-friendly.

### 2. Salary/Income Thresholds
**None.** No salary or income threshold.

### 3. Maximum Duration
**No statutory cap.** Courts analyze duration on a case-by-case basis. Restrictions of 1 to 3 years have been upheld depending on the industry and the nature of the protectable interest. Two years is a common benchmark for reasonableness.

### 4. Geographic Scope Requirements
Geographic restrictions must relate to the employer's actual business territory or the employee's area of responsibility. Arizona courts have upheld restrictions that are defined by customer relationships rather than geographic boundaries (activity-based restrictions). Nationwide restrictions are possible but must be justified by nationwide operations.

### 5. Consideration Requirements
**Continued employment generally suffices.** Arizona courts have held that continued at-will employment constitutes adequate consideration for both at-hire and post-hire non-competes, though the case law is not entirely settled for post-hire agreements. Providing independent consideration for post-hire agreements is recommended.

### 6. Blue Pencil Doctrine
**Reformation.** Arizona courts will modify overbroad provisions to make them reasonable. The leading case confirms that courts have equitable authority to reform rather than void. However, courts may refuse to reform if the restriction was drafted in bad faith or is so overbroad as to indicate overreach.

### 7. Required Notice Periods
**None.** No statutory notice requirement.

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorneys are exempt under Arizona Rules of Professional Conduct (Rule 5.6). No specific physician, broadcaster, or low-wage worker exemptions.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes in the 2023-2026 window. Arizona has not enacted comprehensive non-compete reform, though bills have been introduced and not passed.

### 10. Key Case Law
**Amex Distributing Co. v. Mascari, 150 Ariz. 510 (1986)**: Established Arizona's modern framework for analyzing non-compete reasonableness, including the reformation doctrine. Courts balance the employer's legitimate interest against the employee's right to earn a livelihood.

**Orca Communications Unlimited, LLC v. Noder, 236 Ariz. 180 (2014)**: Refined the analysis of what constitutes a protectable interest, holding that generalized claims of protecting "goodwill" are insufficient without specific evidence of confidential information, trade secrets, or customer relationships at risk.

```json
{
  "jurisdiction": "AZ",
  "jurisdiction_name": "Arizona",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test", "legitimate_business_interest_required"],
  "statutory_framework": "A.R.S. § 44-1401 et seq."
}
```

---

## ARKANSAS

### 1. Enforceability Status
**Generally enforceable.** Arkansas enforces non-competes under Ark. Code § 4-75-101 (restraint of trade) and common law. The state applies a reasonableness test considering duration, geographic scope, and the nature of the restriction. Arkansas is moderately employer-friendly.

### 2. Salary/Income Thresholds
**None.** No salary or income threshold.

### 3. Maximum Duration
**No statutory cap.** Courts evaluate duration under the reasonableness standard. Restrictions of up to 2 years are generally upheld. Three-year restrictions have been sustained in some cases involving sale-of-business contexts.

### 4. Geographic Scope Requirements
Geographic restrictions must be reasonable and related to the employer's business operations. Arkansas courts require specificity; vague or undefined geographic scopes may be struck down. Restrictions limited to the employee's actual territory or customer base are favored.

### 5. Consideration Requirements
**Continued employment suffices at hire.** For post-hire agreements, Arkansas courts have generally accepted continued employment as adequate consideration for at-will employees, though some decisions are ambiguous. Independent consideration strengthens enforceability.

### 6. Blue Pencil Doctrine
**Reformation.** Arkansas courts apply the reformation approach, modifying overbroad provisions to make them enforceable. Courts are generally willing to narrow rather than void.

### 7. Required Notice Periods
**None.** No statutory notice requirement.

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorney restrictions are governed by professional conduct rules.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes in the 2023-2026 window. Arkansas has not enacted comprehensive non-compete reform.

### 10. Key Case Law
**Dawson v. Temps Plus, Inc., 337 Ark. 247 (1999)**: Key case establishing that non-competes are enforceable in Arkansas when they protect legitimate business interests and are reasonable in scope. The court emphasized that the burden is on the employer to demonstrate reasonableness.

**Duffner v. ICM Mortgage Corp., 337 Ark. 583 (1999)**: Addressed consideration requirements, holding that continued employment of an at-will employee can constitute adequate consideration for a non-compete signed after the commencement of employment.

```json
{
  "jurisdiction": "AR",
  "jurisdiction_name": "Arkansas",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test"],
  "statutory_framework": "Ark. Code § 4-75-101"
}
```

---

## CALIFORNIA

### 1. Enforceability Status
**BANNED OUTRIGHT.** California has the most absolute prohibition on non-compete agreements in the United States. Cal. Bus. & Prof. Code § 16600 provides: "every contract by which anyone is restrained from engaging in a lawful profession, trade, or business of any kind is to that extent void." This is not a reasonableness standard; it is a categorical prohibition. The only exceptions are: (a) sale of a business (§ 16601), (b) dissolution of a partnership (§ 16602), and (c) dissolution of an LLC (§ 16602.5). California courts have consistently refused to apply out-of-state non-competes to California workers.

### 2. Salary/Income Thresholds
**Not applicable.** The ban is absolute regardless of compensation level.

### 3. Maximum Duration
**Not applicable.** All durations are void.

### 4. Geographic Scope Requirements
**Not applicable.** All geographic scopes are void.

### 5. Consideration Requirements
**Not applicable.** No amount of consideration makes a non-compete enforceable.

### 6. Blue Pencil Doctrine
**Not applicable.** Courts will not reform a non-compete to make it enforceable. The entire provision is void. Courts will not engage in reformation of a categorically prohibited agreement.

### 7. Required Notice Periods
**Not applicable to non-competes.** However, under AB 1076 and SB 699 (effective January 1, 2024), employers are required to notify current and former employees (who were employed after January 1, 2022) in writing by February 14, 2024, that any existing non-compete clauses are void. Failure to provide this notice may give rise to a cause of action.

### 8. Specific Exemptions
**The entire category is banned**, so exemptions run the other direction: the only contexts where non-competes are permitted are:
- Sale of the goodwill of a business or ownership interest (§ 16601)
- Dissolution or dissociation from a partnership (§ 16602)
- Dissolution or dissociation from an LLC (§ 16602.5)

### 9. Recent Legislative Changes (2023-2026)
**AB 1076 (2023, effective January 1, 2024)**: Codified *Edwards v. Arthur Andersen* holding, explicitly confirming that non-competes are void regardless of where and when they were signed. Also requires employers to notify employees that existing non-competes are void.

**SB 699 (2023, effective January 1, 2024)**: Made it unlawful for any employer to enter into or attempt to enforce a non-compete against a current or former California employee, regardless of where the agreement was signed or what law it purports to invoke. Gives employees a private right of action and allows recovery of attorneys' fees. This statute aggressively combats the use of out-of-state non-competes against California residents.

### 10. Key Case Law
**Edwards v. Arthur Andersen LLP, 44 Cal. 4th 937 (2008)**: The landmark California Supreme Court decision confirming that § 16600 means what it says: all non-competes are void, period. The court rejected the "narrow restraint" doctrine, which would have allowed reasonable restraints. This case eliminated any remaining ambiguity about whether California would adopt a reasonableness test.

**The Application Group, Inc. v. The Hunter Group, Inc., 61 Cal. App. 4th 881 (1998)**: Established that California's public policy against non-competes extends to out-of-state agreements when the employee works in California. California courts will refuse to enforce another state's non-compete against a California worker.

```json
{
  "jurisdiction": "CA",
  "jurisdiction_name": "California",
  "enforceability": "banned",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": 0,
  "max_duration_presumptive_months": 0,
  "blue_pencil": "not_applicable",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "not_applicable",
  "independent_consideration_recommended": false,
  "exemptions": ["all_employees_banned"],
  "exceptions": ["sale_of_business", "partnership_dissolution", "llc_dissolution"],
  "key_restrictions": ["categorical_ban", "out_of_state_agreements_also_void_for_ca_workers"],
  "statutory_framework": "Cal. Bus. & Prof. Code § 16600",
  "notification_requirement": "Employers must notify current/former employees that non-competes are void (AB 1076, SB 699)"
}
```

---

## COLORADO

### 1. Enforceability Status
**Banned for most workers; enforceable with significant restrictions for high earners.** Colorado underwent a major overhaul with HB 22-1317, effective August 10, 2022 (codified at C.R.S. § 8-2-113). Non-competes are void and unenforceable for employees earning below specified annual compensation thresholds. For employees above the threshold, non-competes are enforceable only if they protect trade secrets, are reasonable, and comply with disclosure and notice requirements.

### 2. Salary/Income Thresholds
**Yes.** Non-competes are void for workers earning at or below the "threshold amount," which is set annually by the Colorado Division of Labor Standards and Statistics. The initial threshold (2022) was approximately $101,250 (equivalent to the annualized amount of 60% of the threshold for highly compensated workers under 29 C.F.R. § 541.601). This threshold is adjusted annually for inflation. As of 2025/2026, the threshold is estimated to be approximately $112,500 to $117,000 (verify with current DLSS publication). Non-solicitation of customers is separately restricted below a lower threshold (initially approximately $60,750, adjusted annually).

The threshold references total annual cash compensation, including base salary and commissions but generally not equity or benefits.

### 3. Maximum Duration
**No statutory cap.** Courts apply the reasonableness test. Under case law, restrictions of up to 2 years have been upheld for qualifying high-earner agreements. One year is a safer target. Restrictions beyond 2 years face substantial scrutiny.

### 4. Geographic Scope Requirements
Courts apply a reasonableness standard. Geographic restrictions must be tied to the employer's actual competitive area. For technology or knowledge-economy workers, courts may accept industry or activity restrictions in lieu of geographic boundaries, particularly when competition is not geographically defined.

### 5. Consideration Requirements
**Statutory.** HB 22-1317 requires that the non-compete be entered into as part of a "covenant not to compete" that is disclosed and signed by the worker. For post-hire agreements, the statute does not eliminate the consideration requirement, but the provision of continued employment, combined with notice and disclosure, is generally viewed as sufficient when the statutory formalities are satisfied. Independent consideration is the safest approach.

### 6. Blue Pencil Doctrine
**Reformation (with caution).** Colorado courts have historically been willing to modify overbroad provisions, but the 2022 statute creates penalties for employers who impose void non-competes, which may make courts less inclined to reform agreements that are void as a matter of law (e.g., below-threshold agreements). For above-threshold agreements, reformation remains available.

### 7. Required Notice Periods
**Yes.** HB 22-1317 requires that the employer provide the worker with a separate, written notice of the non-compete. For new hires, notice must be provided before the worker accepts the offer of employment. For existing employees, notice must be provided at least 14 days before the effective date of the non-compete. The notice must identify the agreement by name, direct the worker to the specific language, and be signed by the worker. Failure to comply with notice requirements renders the non-compete void.

### 8. Specific Exemptions
- Workers below the compensation threshold (void as a matter of law)
- Non-solicitation agreements below the lower compensation threshold
- The statute imposes a penalty provision: employers who attempt to enforce void non-competes may be liable for actual damages, injunctive relief, and reasonable attorneys' fees
- Attorneys (professional conduct rules)
- Sale-of-business agreements have a separate, more permissive framework

### 9. Recent Legislative Changes (2023-2026)
**HB 22-1317 (2022, effective August 10, 2022)**: The foundational reform. Established the compensation thresholds, notice requirements, trade-secret limitation, and penalty provisions. This is the dominant recent change.

Post-2022, Colorado has continued to adjust the compensation thresholds annually. No additional major legislation in 2023-2026 beyond threshold adjustments, though the Colorado legislature has remained active in employment law generally.

### 10. Key Case Law
**Lucht's Concrete Pumping, Inc. v. Horner, 224 P.3d 355 (Colo. App. 2009)**: Pre-reform case establishing the reasonableness framework and trade-secret requirement under the prior version of § 8-2-113. Remains relevant for interpreting what constitutes a protectable trade secret.

**Saturn Systems, Inc. v. Militare, 252 P.3d 516 (Colo. App. 2011)**: Addressed the scope of the trade-secret protection requirement and the relationship between the non-compete restriction and the employer's actual protectable interests. Remains cited for the proposition that non-competes must be narrowly tailored to trade-secret protection.

```json
{
  "jurisdiction": "CO",
  "jurisdiction_name": "Colorado",
  "enforceability": "banned_conditional",
  "salary_threshold": 112500,
  "salary_threshold_estimated": true,
  "salary_threshold_type": "annual",
  "salary_threshold_indexed": true,
  "salary_threshold_nonsolicitation": 67500,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": 14,
  "notice_required_before_hire": true,
  "garden_leave_required": false,
  "consideration_posthire": "statutory",
  "independent_consideration_recommended": true,
  "exemptions": ["below_threshold_workers", "attorneys"],
  "key_restrictions": ["trade_secret_protection_only", "written_notice_required", "compensation_threshold", "penalty_for_void_enforcement"],
  "statutory_framework": "C.R.S. § 8-2-113"
}
```

---

## CONNECTICUT

### 1. Enforceability Status
**Generally enforceable.** Connecticut applies a common law reasonableness test. Non-competes must be reasonable in time, geographic scope, and scope of restricted activity, and must protect a legitimate business interest. Connecticut courts are moderately employee-friendly but will enforce reasonable restrictions.

### 2. Salary/Income Thresholds
**None.** No statutory salary threshold.

### 3. Maximum Duration
**No statutory cap.** Courts apply the reasonableness standard. Restrictions of 1 to 2 years are commonly upheld. Three-year restrictions have occasionally been sustained in appropriate circumstances but face heavier scrutiny.

### 4. Geographic Scope Requirements
Courts require geographic restrictions to be tied to the employer's actual business territory. Restrictions limited to the area where the employee worked or had customer contact are favored. Overly broad geographic restrictions (e.g., nationwide without justification) may be reformed or struck down.

### 5. Consideration Requirements
**Independent consideration likely required for post-hire agreements.** Connecticut courts have held that initial employment is adequate consideration for at-hire non-competes. For post-hire agreements, the law is less clear, but several decisions suggest that continued employment alone may not be sufficient, particularly for at-will employees. Providing a bonus, promotion, raise, or access to confidential information at the time of signing is strongly recommended.

### 6. Blue Pencil Doctrine
**Reformation.** Connecticut courts will modify overbroad provisions to make them enforceable. Courts exercise equitable discretion to narrow restrictions rather than void them entirely.

### 7. Required Notice Periods
**None.** No statutory notice requirement. However, Connecticut has considered non-compete reform legislation in recent sessions.

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorneys are exempt under Connecticut Rules of Professional Conduct. Connecticut has considered but not enacted exemptions for physicians and low-wage workers as of the most recent legislative sessions.

### 9. Recent Legislative Changes (2023-2026)
Connecticut has introduced multiple non-compete reform bills in recent sessions (including proposed bans for low-wage workers, notice requirements, and duration caps) but has not enacted comprehensive reform as of early 2025. The legislative trajectory suggests reform may be coming, but no new law has passed.

### 10. Key Case Law
**Robert S. Weiss & Associates, Inc. v. Wiederlight, 208 Conn. 525 (1988)**: The leading Connecticut case on non-compete enforceability. Established the five-factor test: (1) the restriction is reasonably necessary to protect the employer, (2) it is not unreasonably restrictive of the employee's rights, (3) it is not injurious to the public interest, (4) the duration is reasonable, (5) the geographic scope is reasonable. This framework remains controlling.

**New Haven Tobacco Co. v. Perrelli, 18 Conn. App. 531 (1989)**: Addressed the reformation doctrine, confirming that Connecticut courts have the equitable power to modify overbroad restrictions.

```json
{
  "jurisdiction": "CT",
  "jurisdiction_name": "Connecticut",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "independent_required",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test", "five_factor_test"],
  "statutory_framework": null
}
```

---

## DELAWARE

### 1. Enforceability Status
**Generally enforceable.** Delaware applies a reasonableness test. Non-competes are enforceable if they are reasonable in scope, duration, and geographic area, and if they protect a legitimate business interest such as trade secrets, confidential information, or customer relationships. Delaware courts, particularly the Court of Chancery, have significant experience with restrictive covenant disputes given the state's prominence in corporate law.

### 2. Salary/Income Thresholds
**None.** No salary or income threshold.

### 3. Maximum Duration
**No statutory cap.** Courts evaluate reasonableness. Restrictions of 1 to 2 years are routinely upheld. The Court of Chancery has occasionally upheld longer restrictions in cases involving senior executives or sale-of-business contexts.

### 4. Geographic Scope Requirements
Geographic restrictions must be reasonable and tailored. Delaware courts favor restrictions that correspond to the employer's actual competitive territory. Activity-based restrictions (defining the restricted industry rather than geography) are also analyzed under the reasonableness standard and may be appropriate for knowledge-economy businesses.

### 5. Consideration Requirements
**Continued employment may suffice for short periods.** For at-hire agreements, employment is adequate consideration. For post-hire agreements, Delaware courts have addressed this with some inconsistency, but the weight of authority suggests that continued at-will employment for a meaningful period (at least several months) may constitute adequate consideration. Providing independent consideration remains the safer practice.

### 6. Blue Pencil Doctrine
**Reformation.** Delaware courts, particularly the Court of Chancery, will reform overbroad restrictions to make them reasonable. The court has broad equitable authority and regularly exercises it in restrictive covenant cases.

### 7. Required Notice Periods
**None.** No statutory notice requirement.

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorneys are exempt under professional conduct rules. Delaware has not enacted specific exemptions for physicians, broadcasters, or low-wage workers.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes in the 2023-2026 period. Delaware has not enacted non-compete reform legislation.

### 10. Key Case Law
**Research & Trading Corp. v. Powell, No. 12240, 1991 WL 169394 (Del. Ch. 1991)**: Foundational Chancery opinion establishing the reasonableness framework for Delaware non-competes. The court analyzed the interplay between time, geographic, and scope restrictions.

**RHIS, Inc. v. Boac, No. 12336, 2016 WL 4574016 (Del. Ch. 2016)**: Modern application of the reformation doctrine, demonstrating the Court of Chancery's willingness to narrow overbroad restrictions rather than void them, while emphasizing that the employer bears the burden of proving reasonableness.

```json
{
  "jurisdiction": "DE",
  "jurisdiction_name": "Delaware",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test"],
  "statutory_framework": null
}
```

---

## DISTRICT OF COLUMBIA

### 1. Enforceability Status
**BANNED for virtually all workers.** The D.C. Ban on Non-Compete Agreements Amendment Act of 2020 (D.C. Law 23-209, effective October 1, 2022, as amended by the Non-Compete Clarification Amendment Act of 2022) prohibits employers from requiring or requesting that a covered employee sign a non-compete agreement. The ban is near-absolute, with only extremely narrow exceptions for "highly compensated employees" and certain medical specialists. D.C. is one of the most restrictive jurisdictions in the country.

### 2. Salary/Income Thresholds
**Yes, but inverted.** The ban applies to virtually all workers. The only workers who may be subject to non-competes are "highly compensated employees" meeting a specific threshold. Under the amended act, "highly compensated employees" are those who earn at or above a threshold set by the Mayor (initially referenced as approximately $150,000 per year, though the precise figure may have been adjusted). Even for highly compensated employees, non-competes are subject to significant restrictions including reasonableness, duration caps, and notice requirements. Medical specialists above a certain threshold may also be subject to limited restrictions. **Verify the current threshold with D.C. DOES.**

### 3. Maximum Duration
**For the narrow exception categories:** The statute limits non-competes to a reasonable duration. One year is the practical maximum that would be considered reasonable under D.C.'s framework. For all other workers, the maximum is zero (banned).

### 4. Geographic Scope Requirements
For the narrow exception categories, geographic scope must be reasonable and connected to the employer's actual business. For all other workers, not applicable (banned).

### 5. Consideration Requirements
**Statutory.** For the narrow exception categories, the employer must provide the agreement to the employee at least 14 days before the individual commences employment or at least 14 days before the agreement becomes effective.

### 6. Blue Pencil Doctrine
**Largely not applicable.** Given the near-total ban, there is little for courts to reform. For the narrow exception categories, D.C. courts would likely apply a reasonableness standard with reformation authority, but there is virtually no case law under the new framework.

### 7. Required Notice Periods
**Yes.** For any permissible non-compete (highly compensated employees), the employer must provide a copy of the non-compete provision at least 14 days before the employee begins work or at least 14 days before the effective date of the provision. The employer must also provide the employee with a written notice of the employer's intent to include a non-compete provision. Additionally, employers must provide a "workplace notice" to all employees informing them of the non-compete ban and their rights.

### 8. Specific Exemptions
The ban covers essentially all employees. The narrow exceptions (not truly exemptions from the ban, but rather limited categories where non-competes may apply) include:
- Highly compensated employees (above the threshold)
- Certain medical specialists
- Volunteers in the context of sale-of-business agreements
- Non-competes incidental to the sale of a business

The act also prohibits: workplace policies that restrict moonlighting or other employment, retaliation against employees who refuse to sign non-competes, and non-compete provisions in employment agreements for non-highly-compensated employees.

### 9. Recent Legislative Changes (2023-2026)
**D.C. Ban on Non-Compete Agreements Amendment Act of 2020 (effective October 1, 2022)**: The foundational ban.

**Non-Compete Clarification Amendment Act of 2022**: Amended the original act to create the limited exception for highly compensated employees, which was not in the original bill. The original bill was a near-total ban with no income exceptions; the amendment narrowed the scope of the ban slightly but kept it extremely broad.

The D.C. Council has continued to monitor implementation. No significant amendments in 2023-2026 beyond the 2022 clarification.

### 10. Key Case Law
**Limited.** The statute is relatively new (effective 2022), and significant case law has not yet developed. Pre-ban D.C. case law followed a standard reasonableness test (*Deutsch v. Barsky*, 795 A.2d 669 (D.C. 2002)), but this is now largely superseded by the statutory ban. Courts interpreting the ban's narrow exceptions will develop new doctrine over the coming years.

```json
{
  "jurisdiction": "DC",
  "jurisdiction_name": "District of Columbia",
  "enforceability": "banned_conditional",
  "salary_threshold": 150000,
  "salary_threshold_estimated": true,
  "salary_threshold_type": "annual",
  "salary_threshold_note": "Ban applies BELOW threshold; non-competes only permitted ABOVE threshold for highly compensated employees",
  "salary_threshold_inverted": true,
  "max_duration_months": 12,
  "max_duration_presumptive_months": 12,
  "blue_pencil": "not_applicable",
  "notice_required_days": 14,
  "garden_leave_required": false,
  "consideration_posthire": "statutory",
  "independent_consideration_recommended": true,
  "exemptions": ["all_below_threshold", "non_highly_compensated_employees"],
  "exceptions_permitting_noncompete": ["highly_compensated_employees", "sale_of_business", "certain_medical_specialists"],
  "key_restrictions": ["near_total_ban", "workplace_notice_required", "anti_retaliation_provision", "anti_moonlighting_restriction_banned"],
  "statutory_framework": "D.C. Law 23-209, as amended"
}
```

---

## FLORIDA

### 1. Enforceability Status
**Generally enforceable; Florida is the most employer-friendly state for non-competes.** Florida has a comprehensive statutory framework (Fla. Stat. § 542.335) that explicitly validates non-compete agreements and provides detailed guidance on enforceability. The statute creates a presumption of enforceability when the agreement protects one or more listed "legitimate business interests." Courts are directed by statute to enforce non-competes and not consider the hardship on the employee as a basis for refusing enforcement.

### 2. Salary/Income Thresholds
**None.** No salary or income threshold. Non-competes are enforceable at all compensation levels.

### 3. Maximum Duration
**Statutory presumptions.** Fla. Stat. § 542.335(1)(d) establishes:
- **6 months or less**: Presumptively reasonable for restrictions against solicitation of existing customers
- **2 years or less**: Presumptively reasonable for all other non-compete restrictions
- **Over 2 years**: Presumptively unreasonable (but not per se unenforceable; the burden shifts to the employer to prove reasonableness)

These are statutory presumptions, not caps. Restrictions longer than 2 years can be enforced if the employer demonstrates reasonableness.

### 4. Geographic Scope Requirements
Florida courts analyze geographic scope under the reasonableness standard. The statute does not impose specific geographic rules. Courts have upheld statewide and even nationwide restrictions when the employer's business operates at that scale. The restriction must bear a reasonable relationship to the employer's legitimate business interest.

### 5. Consideration Requirements
**Employment is sufficient consideration.** Florida courts consistently hold that the offer of employment at the time of hire is adequate consideration. For post-hire agreements, continued employment has generally been held to constitute sufficient consideration, particularly for at-will employees. The statute focuses on the existence of a legitimate business interest rather than the sufficiency of consideration.

### 6. Blue Pencil Doctrine
**Reformation (strong).** Fla. Stat. § 542.335(1)(c) explicitly authorizes courts to modify overbroad restrictions: "If a court or arbitrator finds that a contractually specified restraint is overbroad, overlong, or otherwise not reasonably necessary to protect the legitimate business interest or interests established by the person seeking enforcement, a court or arbitrator shall modify the restraint and grant only the relief reasonably necessary to protect such interest or interests." This mandatory reformation language is the strongest in the nation.

### 7. Required Notice Periods
**None.** Florida does not require advance notice before presenting a non-compete. However, the agreement must be in writing and signed by the person against whom enforcement is sought.

### 8. Specific Exemptions
**Extremely limited.** Florida does not have broad categorical exemptions. The statute applies to all employees, agents, and independent contractors. Attorneys are subject to professional conduct limitations. There is no physician, broadcaster, or low-wage worker exemption.

### 9. Recent Legislative Changes (2023-2026)
No significant changes to the non-compete framework in 2023-2026. Florida's statute (§ 542.335) has been stable since its last major amendment in 1996. The Florida legislature has shown no appetite for non-compete reform; to the contrary, Florida has resisted the national trend toward restriction.

### 10. Key Case Law
**Proudfoot Consulting Co. v. Gordon, 576 F.3d 1223 (11th Cir. 2009) (applying Florida law)**: Key case applying Florida's non-compete statute, emphasizing the statutory presumption of reasonableness for restrictions of 2 years or less and the mandatory reformation requirement.

**Henao v. Professional Shoe Repair, Inc., 929 So. 2d 723 (Fla. 3d DCA 2006)**: Addressed the statutory directive that courts shall not consider employee hardship when determining enforceability, reinforcing Florida's strongly pro-employer posture.

```json
{
  "jurisdiction": "FL",
  "jurisdiction_name": "Florida",
  "enforceability": "generally_enforceable",
  "employer_friendly_rating": "highest",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "max_duration_customer_solicitation_months": 6,
  "blue_pencil": "reformation",
  "blue_pencil_mandatory": true,
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": [],
  "key_restrictions": ["legitimate_business_interest_required", "hardship_not_considered", "mandatory_reformation"],
  "statutory_framework": "Fla. Stat. § 542.335"
}
```

---

## GEORGIA

### 1. Enforceability Status
**Enforceable with restrictions.** Georgia underwent a significant shift with the Georgia Restrictive Covenants Act (O.C.G.A. § 13-8-50 et seq.), which took effect on November 2, 2011, following a 2010 constitutional amendment authorizing the legislature to regulate restrictive covenants. For agreements entered into on or after November 2, 2011, the Act provides a comprehensive framework. Pre-Act agreements are governed by older, more restrictive case law. Georgia is now moderately employer-friendly.

### 2. Salary/Income Thresholds
**None.** No statutory salary threshold. However, the Act distinguishes between different categories of restricted parties (employees, distributors, agents, etc.) and applies somewhat different reasonableness standards to each.

### 3. Maximum Duration
**No statutory cap.** Courts apply the reasonableness standard. Under the Act, the court must consider the nature of the restriction, the scope, and the duration. Restrictions of 2 years are generally considered reasonable. Under pre-2011 law, courts were much more restrictive, and some pre-Act restrictions were struck down for relatively modest overreach.

### 4. Geographic Scope Requirements
Under the Act, geographic scope must be reasonable. For post-Act agreements, courts will analyze whether the geographic restriction corresponds to the employer's actual territory or the employee's area of influence. The Act permits activity-based restrictions (restricting the type of work rather than the geographic area) as an alternative. Pre-Act case law was extremely strict about geographic specificity.

### 5. Consideration Requirements
**Employment is sufficient.** Under the Act, continued employment constitutes adequate consideration for restrictive covenants. O.C.G.A. § 13-8-52(b) specifically provides that continued employment, access to trade secrets, and goodwill associated with ongoing employment relationships are adequate consideration.

### 6. Blue Pencil Doctrine
**Reformation.** This is one of the most important changes under the Act. O.C.G.A. § 13-8-54 grants courts discretion to modify overbroad restrictions rather than void them. Under pre-Act law, Georgia followed a strict approach that voided any overbroad restriction without reformation. The Act's reformation provision was a central purpose of the constitutional amendment and subsequent legislation.

### 7. Required Notice Periods
**None.** No statutory notice requirement under the Act.

### 8. Specific Exemptions
Under the Act, non-competes cannot be enforced against: employees who do not have significant customer contact, access to trade secrets or confidential information, or specialized training paid for by the employer. The Act requires that the restricted employee fall into a defined category (§ 13-8-53) that justifies the restriction. This is a functional exemption: employees without a qualifying connection to protectable interests are effectively exempt.

### 9. Recent Legislative Changes (2023-2026)
No significant amendments to the Georgia Restrictive Covenants Act in 2023-2026. The Act has been stable since enactment, with courts developing interpretive case law under the new framework.

### 10. Key Case Law
**Habif, Arogeti & Wynne, P.C. v. Baggett, 231 Ga. App. 289 (1998)**: Pre-Act case illustrating the old strict approach (no reformation). This case motivated the constitutional amendment and subsequent legislation.

**Holsapple v. Smith & Wesson Corp., 253 Ga. App. 284 (2002)**: Pre-Act case. Under the current Act, courts have begun developing a body of law applying the reformation doctrine, with several trial and appellate decisions from 2012 onward.

```json
{
  "jurisdiction": "GA",
  "jurisdiction_name": "Georgia",
  "enforceability": "enforceable_restricted",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": ["employees_without_qualifying_connection"],
  "key_restrictions": ["employee_must_have_trade_secret_access_or_customer_contact_or_specialized_training", "reasonableness_test"],
  "statutory_framework": "O.C.G.A. § 13-8-50 et seq.",
  "note": "Pre-November 2011 agreements governed by stricter pre-Act law"
}
```

---

## HAWAII

### 1. Enforceability Status
**Generally enforceable, with a specific ban for technology workers.** Hawaii applies a reasonableness test for most industries. However, in 2015, Hawaii enacted HRS § 480-4(d), which prohibits non-compete agreements for employees in the "technology business" sector. For all other industries, non-competes are analyzed under the common law reasonableness framework.

### 2. Salary/Income Thresholds
**None (general).** The technology worker ban applies regardless of salary. For non-technology workers, there is no salary threshold.

### 3. Maximum Duration
**No statutory cap.** Courts evaluate reasonableness. One to two years is generally the accepted range. Hawaii's limited case law does not provide bright-line duration rules.

### 4. Geographic Scope Requirements
Courts require reasonable geographic restrictions tied to the employer's business area. Given Hawaii's island geography, restrictions limited to specific islands or the state as a whole have been analyzed. National restrictions would require national operations.

### 5. Consideration Requirements
**Continued employment generally suffices.** Hawaii's limited case law suggests that employment is adequate consideration at hire. For post-hire agreements, independent consideration is recommended given the uncertainty.

### 6. Blue Pencil Doctrine
**Reformation likely, but case law is limited.** Hawaii courts are expected to follow the majority approach of modifying overbroad provisions, but there are few reported decisions directly addressing the reformation question.

### 7. Required Notice Periods
**None.** No statutory notice requirement.

### 8. Specific Exemptions
- **Technology workers**: HRS § 480-4(d) (effective 2015). "Technology business" is defined as companies deriving the majority of revenues from products or services relating to technology, including software, hardware, electronics, networking, internet, and related fields.
- Attorneys (professional conduct rules)

### 9. Recent Legislative Changes (2023-2026)
The technology worker ban (HRS § 480-4(d)) was enacted in 2015. No significant further changes in 2023-2026. Hawaii has considered broader non-compete reform but has not enacted additional legislation.

### 10. Key Case Law
Hawaii's non-compete case law is limited. Courts generally look to other jurisdictions (particularly California and the Ninth Circuit) for persuasive authority. There is no single landmark Hawaii Supreme Court decision that establishes a comprehensive non-compete framework comparable to other states.

```json
{
  "jurisdiction": "HI",
  "jurisdiction_name": "Hawaii",
  "enforceability": "enforceable_restricted",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "unclear",
  "independent_consideration_recommended": true,
  "exemptions": ["technology_workers", "attorneys"],
  "key_restrictions": ["technology_business_ban", "reasonableness_test"],
  "statutory_framework": "HRS § 480-4(d) (technology ban)"
}
```

---

## IDAHO

### 1. Enforceability Status
**Generally enforceable.** Idaho has a statutory framework for non-competes (Idaho Code § 44-2701 through 44-2704, effective July 1, 2016). The statute codifies the reasonableness test and establishes specific parameters for enforceability. Idaho is moderately employer-friendly.

### 2. Salary/Income Thresholds
**None.** No salary threshold, but the statute's application is limited to employees who are "key employees" or "key independent contractors" with access to trade secrets or other protectable interests.

### 3. Maximum Duration
**18 months is presumptively reasonable.** Idaho Code § 44-2704 provides that a non-compete with a duration of 18 months or less following the end of employment is presumptively reasonable. Restrictions exceeding 18 months are not per se unreasonable but face an uphill battle.

### 4. Geographic Scope Requirements
The statute requires geographic restrictions to be reasonable. Courts analyze whether the geographic scope is related to the employer's actual area of operations or the employee's area of influence.

### 5. Consideration Requirements
**Employment suffices at hire.** For post-hire agreements, the statute does not specify independent consideration requirements. Continued employment is likely sufficient, but independent consideration is recommended.

### 6. Blue Pencil Doctrine
**Reformation.** Idaho Code § 44-2704 authorizes courts to modify overbroad restrictions: "If a court finds that any restriction contained in a noncompete agreement is unreasonable, the court shall modify the restriction to the extent necessary and no greater to protect the interests of the employer."

### 7. Required Notice Periods
**None specified in the statute.** However, the agreement must be in writing and signed by all parties.

### 8. Specific Exemptions
The statute applies to "key employees" and "key independent contractors." Employees without access to trade secrets, confidential business information, or other qualifying protectable interests may not be subject to enforceable non-competes under the statutory framework.

### 9. Recent Legislative Changes (2023-2026)
No significant amendments to Idaho's non-compete statute in 2023-2026. The 2016 framework remains operative.

### 10. Key Case Law
**IMED Corp. v. Systems Engineering Associates Corp., 602 So. 2d 344 (Idaho 1992)**: Pre-statute case establishing the reasonableness framework in Idaho. The court articulated the standard three-factor test (legitimate interest, reasonable scope, not unduly burdensome).

**Trilogy Network Systems, Inc. v. Johnson, 172 Idaho 165 (2022)**: Post-statute application addressing the 18-month presumption and the reformation doctrine under the 2016 statute.

```json
{
  "jurisdiction": "ID",
  "jurisdiction_name": "Idaho",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 18,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": true,
  "exemptions": ["non_key_employees"],
  "key_restrictions": ["key_employee_or_key_contractor_only", "18_month_presumption", "reasonableness_test"],
  "statutory_framework": "Idaho Code § 44-2701 et seq."
}
```

---

## ILLINOIS

### 1. Enforceability Status
**Banned for lower-wage workers; enforceable with significant restrictions for higher earners.** The Illinois Freedom to Work Act (820 ILCS 90/, effective January 1, 2022) fundamentally restructured Illinois non-compete law. Non-competes are void for employees earning at or below $75,000 per year. Non-solicitation agreements are void for employees earning at or below $45,000 per year. For employees above these thresholds, non-competes must be reasonable in scope, duration, and activity, and must comply with notice and consideration requirements.

### 2. Salary/Income Thresholds
**Yes.**
- **Non-compete**: Void if employee earns $75,000/year or less. This threshold increases by $5,000 every five years (to $80,000 on January 1, 2027; $85,000 on January 1, 2032; $90,000 on January 1, 2037).
- **Non-solicitation**: Void if employee earns $45,000/year or less. This threshold increases by $2,500 every five years (to $47,500 on January 1, 2027).
- "Earnings" refers to annualized compensation, including base salary, bonuses, and commissions.

### 3. Maximum Duration
**No statutory cap.** Courts apply the reasonableness standard. Under Illinois case law, restrictions of 1 to 2 years are commonly upheld. The Freedom to Work Act does not prescribe a maximum duration but requires that the restriction be no greater than necessary to protect the employer's legitimate business interest.

### 4. Geographic Scope Requirements
Courts evaluate geographic reasonableness under the totality of the circumstances. Geographic restrictions must be tied to the employer's actual competitive territory. Illinois courts have upheld nationwide restrictions for companies with national operations but scrutinize the relationship between the restriction and the employee's actual area of responsibility.

### 5. Consideration Requirements
**Statutory (significant).** The Freedom to Work Act defines "adequate consideration" as:
- At hire: employment itself is adequate
- Post-hire: the employee must receive **at least 2 years of continued employment** after signing the agreement, OR other adequate consideration (e.g., a bonus, raise, promotion, access to confidential information, or other benefit that represents an independent economic benefit to the employee)

This 2-year continued-employment requirement is one of the most employee-protective consideration standards in the country. If an employee is terminated or leaves within 2 years of signing a post-hire non-compete without receiving other adequate consideration, the non-compete is void for lack of consideration.

### 6. Blue Pencil Doctrine
**Reformation.** Illinois courts will modify overbroad provisions to make them enforceable. The leading case (*Reliable Fire Equipment*) established a totality-of-the-circumstances approach. However, courts will not reform agreements that are so overbroad as to indicate bad faith or an intent to intimidate.

### 7. Required Notice Periods
**Yes.** The Freedom to Work Act requires that the employer:
- Advise the employee **in writing** to consult with an attorney before signing
- Provide the employee with a copy of the agreement at least **14 business days** before the commencement of employment (or 14 business days before the effective date if post-hire)
- The employee must have at least 14 business days to review the agreement before signing

### 8. Specific Exemptions
- Employees earning $75,000/year or less (non-competes void)
- Employees earning $45,000/year or less (non-solicitation void)
- **Government employees** are exempt
- **Union members covered by collective bargaining agreements** are exempt
- Employees who are **terminated, furloughed, or laid off** as a result of business circumstances or government orders related to COVID-19 or similar circumstances (specific provision may sunset)
- Attorneys (professional conduct rules)

### 9. Recent Legislative Changes (2023-2026)
**Illinois Freedom to Work Act (SB 672, effective January 1, 2022)**: The foundational reform. The threshold amounts are scheduled to increase on five-year intervals as noted above.

No significant amendments to the Freedom to Work Act have been enacted in 2023-2026 beyond the scheduled threshold adjustments. Illinois has been one of the more active states in non-compete reform.

### 10. Key Case Law
**Reliable Fire Equipment Co. v. Arredondo, 965 N.E.2d 393 (Ill. 2011)**: Landmark Illinois Supreme Court decision that replaced the prior rigid two-year continued-employment rule for consideration with a totality-of-the-circumstances test. The court held that consideration adequacy should be evaluated based on all relevant factors, not just duration of post-signing employment. This case shaped the legislative reform that followed.

**Fifield v. Premier Dealer Services, Inc., 993 N.E.2d 938 (Ill. App. 2013)**: Applied the *Reliable Fire* framework and held that continued employment of less than 2 years was insufficient consideration absent other adequate consideration. This case reinforced the practical importance of the 2-year benchmark that was subsequently codified.

```json
{
  "jurisdiction": "IL",
  "jurisdiction_name": "Illinois",
  "enforceability": "banned_conditional",
  "salary_threshold": 75000,
  "salary_threshold_type": "annual",
  "salary_threshold_indexed": true,
  "salary_threshold_increase": "$5,000 every 5 years",
  "nonsolicitation_threshold": 45000,
  "nonsolicitation_threshold_increase": "$2,500 every 5 years",
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": 14,
  "notice_type": "business_days",
  "attorney_consultation_notice_required": true,
  "garden_leave_required": false,
  "consideration_posthire": "statutory",
  "consideration_posthire_minimum": "2 years continued employment or independent consideration",
  "independent_consideration_recommended": true,
  "exemptions": ["below_threshold_workers", "government_employees", "union_members_with_cba", "attorneys"],
  "key_restrictions": ["compensation_threshold", "14_business_day_notice", "attorney_consultation_notice", "2_year_consideration_minimum", "reasonableness_test"],
  "statutory_framework": "820 ILCS 90/"
}
```

---

## INDIANA

### 1. Enforceability Status
**Generally enforceable.** Indiana applies a common law reasonableness test. Non-competes must be reasonable in scope, duration, and geographic area, and must protect a legitimate employer interest. Indiana courts analyze non-competes with a moderate level of scrutiny and are generally willing to enforce reasonable restrictions.

### 2. Salary/Income Thresholds
**None.** No salary or income threshold.

### 3. Maximum Duration
**No statutory cap.** Courts evaluate under the reasonableness standard. Restrictions of 1 to 2 years are routinely upheld. Three-year restrictions have occasionally been sustained.

### 4. Geographic Scope Requirements
Geographic restrictions must be reasonable and related to the employer's business territory or the employee's area of activity. Indiana courts have upheld restrictions covering the employer's entire service area. Nationwide restrictions may be upheld for national businesses.

### 5. Consideration Requirements
**Continued employment generally suffices.** Indiana courts have held that continued at-will employment constitutes adequate consideration for post-hire non-competes, provided the employment continues for a reasonable period. However, providing independent consideration strengthens the agreement.

### 6. Blue Pencil Doctrine
**Reformation.** Indiana courts employ the "blue pencil" approach, modifying overbroad provisions to make them reasonable. Courts will not rewrite the agreement but will narrow existing terms.

### 7. Required Notice Periods
**None.** No statutory notice requirement.

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorneys are subject to professional conduct limitations. Indiana does not have specific physician or broadcaster exemptions.

### 9. Recent Legislative Changes (2023-2026)
Indiana enacted SB 7 (effective July 1, 2024), which prohibits non-compete agreements with **primary care physicians** to the extent that they restrict the physician from providing primary care services. This is a narrow but significant exemption for physicians. No broader non-compete reform has been enacted.

### 10. Key Case Law
**Coates v. Heat Wagons, Inc., 942 N.E.2d 905 (Ind. Ct. App. 2011)**: Key case addressing the reasonableness framework and the continued-employment consideration question. The court upheld a 2-year non-compete and found continued employment to be adequate consideration.

**Dicen v. New Sesco, Inc., 839 N.E.2d 684 (Ind. 2005)**: Indiana Supreme Court decision addressing the balancing test between employer protection and employee freedom. The court articulated the standard that non-competes must be "reasonably necessary" to protect the employer's interest.

```json
{
  "jurisdiction": "IN",
  "jurisdiction_name": "Indiana",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys", "primary_care_physicians"],
  "key_restrictions": ["reasonableness_test"],
  "statutory_framework": null,
  "note": "SB 7 (2024) exempts primary care physicians"
}
```

---

## IOWA

### 1. Enforceability Status
**Generally enforceable.** Iowa applies a common law reasonableness test. Non-competes must be reasonable in scope, duration, and geographic area. Iowa courts analyze enforceability under the three-part test: (1) necessary for protection of employer's business, (2) not unreasonably restrictive of employee's rights, (3) not prejudicial to the public interest.

### 2. Salary/Income Thresholds
**None.** No salary or income threshold.

### 3. Maximum Duration
**No statutory cap.** Courts evaluate reasonableness. One to two years is the commonly accepted range. Iowa courts have upheld restrictions of up to 2 years in most cases.

### 4. Geographic Scope Requirements
Geographic restrictions must be reasonable and tied to the employer's actual business area. Iowa courts scrutinize geographic scope and may refuse to enforce restrictions that cover territory where the employer does not operate.

### 5. Consideration Requirements
**Continued employment may suffice.** Iowa courts have addressed this issue with some inconsistency. The weight of authority suggests that continued at-will employment for a meaningful period constitutes adequate consideration, but independent consideration (bonus, promotion, raise) is the safer approach for post-hire agreements.

### 6. Blue Pencil Doctrine
**Hybrid.** Iowa courts have the authority to reform overbroad restrictions but may also choose to void the entire restriction in cases of significant overreach. The approach depends on the degree of overreach and the apparent good faith of the employer. Courts are not obligated to reform.

### 7. Required Notice Periods
**None.** No statutory notice requirement.

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorneys are subject to professional conduct limitations.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes in 2023-2026.

### 10. Key Case Law
**Lamp v. American Prosthetics, Inc., 379 N.W.2d 909 (Iowa 1986)**: Established the modern Iowa framework for non-compete analysis, including the three-part test and the court's authority to reform overbroad provisions.

**Iowa Glass Depot, Inc. v. Jindrich, 338 N.W.2d 376 (Iowa 1983)**: Addressed geographic scope reasonableness and the relationship between the restriction and the employer's actual business territory.

```json
{
  "jurisdiction": "IA",
  "jurisdiction_name": "Iowa",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "hybrid",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "unclear",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test", "three_part_test"],
  "statutory_framework": null
}
```

---

## KANSAS

### 1. Enforceability Status
**Generally enforceable.** Kansas applies a reasonableness test. Non-competes are enforceable if they protect a legitimate employer interest, are reasonable in duration and geographic scope, and do not impose undue hardship.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts evaluate reasonableness. Two years or less is the general benchmark.

### 4. Geographic Scope Requirements
Geographic restrictions must be reasonable and tied to the employer's operations or the employee's area of activity.

### 5. Consideration Requirements
**Continued employment generally suffices.** Kansas courts have held that continued at-will employment is adequate consideration for post-hire non-competes.

### 6. Blue Pencil Doctrine
**Reformation.** Kansas courts will narrow overbroad restrictions to make them enforceable rather than voiding the entire covenant.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**No broad statutory exemptions.**

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes.

### 10. Key Case Law
**Eastern Distribution Co. v. Flynn, 222 Kan. 666 (1977)**: Established the reasonableness framework for Kansas non-competes and the court's reformation authority.

**Idbeis v. Wichita Surgical Specialists, P.A., 279 Kan. 755 (2005)**: Addressed physician non-competes and applied the reasonableness test in the medical practice context, holding that physician non-competes are enforceable if reasonable.

```json
{
  "jurisdiction": "KS",
  "jurisdiction_name": "Kansas",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test"],
  "statutory_framework": null
}
```

---

## KENTUCKY

### 1. Enforceability Status
**Generally enforceable.** Kentucky applies a common law reasonableness test. Non-competes must protect a legitimate interest, be reasonable in duration and scope, and not be unconscionable. Kentucky courts are moderate in their approach.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** One to two years is the commonly accepted range.

### 4. Geographic Scope Requirements
Geographic restrictions must be reasonable and connected to the employer's actual business area. Kentucky courts evaluate geographic scope on a case-by-case basis.

### 5. Consideration Requirements
**Unclear for post-hire.** At hire, employment is adequate consideration. For post-hire agreements, Kentucky case law is mixed. Some decisions suggest continued employment may suffice for at-will employees; others suggest independent consideration is necessary. Providing independent consideration is strongly recommended.

### 6. Blue Pencil Doctrine
**Hybrid.** Kentucky courts have the authority to reform but may also void overbroad provisions in some circumstances. The approach is not clearly settled.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**Physicians**: KRS § 311.550 et seq. imposes restrictions on physician non-competes, requiring that they be reasonable and providing for buyout provisions. Kentucky also restricts non-competes for **broadcasting employees** under KRS § 336.700, which prohibits non-competes for broadcast employees.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes beyond the existing broadcaster and physician provisions.

### 10. Key Case Law
**Creech, Inc. v. Brown, 433 S.W.3d 345 (Ky. 2014)**: Key Kentucky Supreme Court case addressing the enforceability framework and the reasonableness test. The court emphasized that non-competes must be supported by a legitimate interest and narrowly tailored.

**Charles T. Creech, Inc. v. Brown**: Addressed the consideration question and the court's authority to reform overbroad provisions.

```json
{
  "jurisdiction": "KY",
  "jurisdiction_name": "Kentucky",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "hybrid",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "unclear",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys", "broadcast_employees", "physicians_restricted"],
  "key_restrictions": ["reasonableness_test"],
  "statutory_framework": "KRS § 336.700 (broadcasters)"
}
```

---

## LOUISIANA

### 1. Enforceability Status
**Enforceable with significant restrictions.** Louisiana has a unique statutory framework (La. R.S. § 23:921) that is more restrictive than most states. The statute generally declares non-competes void as contrary to public policy, but carves out an exception allowing them when they meet specific statutory requirements. This inversion (default: void; exception: enforceable) distinguishes Louisiana from most jurisdictions.

### 2. Salary/Income Thresholds
**None.** No salary threshold, but the strict statutory requirements effectively limit enforcement.

### 3. Maximum Duration
**Statutory cap: 2 years.** La. R.S. § 23:921(C). The restriction cannot exceed two years from the date of termination.

### 4. Geographic Scope Requirements
**Strict statutory requirement.** The non-compete must specify the exact parishes (counties), municipalities, or parts thereof from which the employee is restricted. A restriction that merely references "the employer's trade area" or uses vague geographic language is void. The geographic specificity requirement is one of the strictest in the nation. The restriction cannot extend statewide unless the employer's operations cover the entire state and each parish is specified.

### 5. Consideration Requirements
**Must be in writing.** La. R.S. § 23:921(C) requires the agreement to be in writing. Employment itself is generally considered adequate consideration. The critical requirement is form (written, specific geographic designation) rather than independent consideration.

### 6. Blue Pencil Doctrine
**Strict void (with nuance).** Louisiana courts have historically refused to reform overbroad non-competes. If the agreement fails to meet the statutory requirements (particularly the geographic specificity requirement), it is void and courts will not rewrite it. However, some recent decisions have shown slightly more flexibility, and there is tension in the case law. The safest assumption is that Louisiana will not reform.

### 7. Required Notice Periods
**None beyond the writing requirement.**

### 8. Specific Exemptions
The statute itself functions as a near-ban with narrow exceptions. The exception applies to employees, agents, distributors, and certain other parties. Sale-of-business non-competes have a separate, more permissive framework. There are no specific categorical exemptions for particular professions within the permitted category.

### 9. Recent Legislative Changes (2023-2026)
Louisiana's non-compete statute has been amended multiple times over the decades. In 2020, an amendment expanded the categories of workers who can be subject to non-competes. No significant changes in 2023-2026.

### 10. Key Case Law
**SWAT 24 Shreveport Bossier, Inc. v. Bond, 808 So. 2d 294 (La. 2001)**: Leading Louisiana Supreme Court case interpreting § 23:921. The court held that the statute must be strictly construed because it is an exception to the general rule of unenforceability. The geographic specificity requirement was strictly applied.

**Vartech Telecom, Inc. v. Hayden, 178 So. 3d 1033 (La. App. 2015)**: Reinforced the strict geographic specificity requirement and the court's refusal to reform noncompliant agreements.

```json
{
  "jurisdiction": "LA",
  "jurisdiction_name": "Louisiana",
  "enforceability": "enforceable_restricted",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": 24,
  "max_duration_presumptive_months": 24,
  "max_duration_statutory_cap": true,
  "blue_pencil": "strict_void",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": [],
  "key_restrictions": ["must_specify_exact_parishes_municipalities", "2_year_statutory_cap", "must_be_in_writing", "strictly_construed", "default_void_with_exception"],
  "statutory_framework": "La. R.S. § 23:921"
}
```

---

## MAINE

### 1. Enforceability Status
**Enforceable with restrictions.** Maine enacted 26 M.R.S.A. § 599-A (effective September 2019), which imposes specific requirements on non-competes. Non-competes are banned for low-wage workers and require advance disclosure for all others.

### 2. Salary/Income Thresholds
**Yes.** Non-competes are prohibited for employees earning at or below 400% of the federal poverty level. For 2025/2026, this threshold is approximately $62,400 for an individual (verify with current HHS poverty guidelines). The threshold references total compensation.

### 3. Maximum Duration
**No statutory cap**, but courts apply reasonableness. One to two years is the general benchmark.

### 4. Geographic Scope Requirements
Reasonableness standard applies. Geographic restrictions must be tied to the employer's actual business territory.

### 5. Consideration Requirements
**Statutory.** For new hires, the non-compete must be disclosed before the offer of employment is accepted (or at least 3 business days before commencement, if no formal offer was made prior). For post-hire agreements, the employee must receive additional consideration or fair and reasonable independent consideration.

### 6. Blue Pencil Doctrine
**Reformation.** Maine courts generally apply the reformation approach.

### 7. Required Notice Periods
**Yes.** The employer must provide notice of the non-compete to the prospective employee before the employee accepts the offer of employment, or if no formal offer was extended, at least **3 business days** before the employee's first day of work. For post-hire agreements, additional consideration is required.

### 8. Specific Exemptions
- Workers earning at or below 400% of the federal poverty level
- Attorneys (professional conduct)

### 9. Recent Legislative Changes (2023-2026)
The 2019 statute (26 M.R.S.A. § 599-A) remains the operative framework. No significant amendments in 2023-2026.

### 10. Key Case Law
Maine's non-compete case law is relatively limited. Courts generally apply the standard reasonableness test. The 2019 statute has not yet generated significant appellate case law.

```json
{
  "jurisdiction": "ME",
  "jurisdiction_name": "Maine",
  "enforceability": "enforceable_restricted",
  "salary_threshold": 62400,
  "salary_threshold_estimated": true,
  "salary_threshold_type": "annual",
  "salary_threshold_basis": "400% federal poverty level",
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": 3,
  "notice_type": "business_days",
  "notice_required_before_hire": true,
  "garden_leave_required": false,
  "consideration_posthire": "independent_required",
  "independent_consideration_recommended": true,
  "exemptions": ["low_wage_workers_below_400pct_fpl", "attorneys"],
  "key_restrictions": ["low_wage_ban", "advance_disclosure_required", "reasonableness_test"],
  "statutory_framework": "26 M.R.S.A. § 599-A"
}
```

---

## MARYLAND

### 1. Enforceability Status
**Enforceable with restrictions.** Maryland's noncompete framework includes Md. Code, Lab. & Empl. § 3-716 (effective October 2019), which prohibits non-competes for low-wage employees, and common law reasonableness principles for all other employees.

### 2. Salary/Income Thresholds
**Yes.** Non-competes are prohibited for employees earning:
- **$15 per hour or less**, OR
- **$31,200 per year or less** (annualized equivalent of $15/hour)

These thresholds are not indexed for inflation.

### 3. Maximum Duration
**No statutory cap.** Courts apply reasonableness. One to two years is generally considered reasonable.

### 4. Geographic Scope Requirements
Courts require reasonable geographic restrictions tied to the employer's actual business area. Maryland courts are moderate in their analysis of geographic scope.

### 5. Consideration Requirements
**Continued employment generally suffices at hire.** For post-hire agreements, the law is not entirely settled, but continued employment for a reasonable period is likely sufficient. Independent consideration is recommended.

### 6. Blue Pencil Doctrine
**Reformation.** Maryland courts generally follow the reformation approach, narrowing overbroad restrictions rather than voiding them.

### 7. Required Notice Periods
**None.** No statutory notice requirement beyond the general requirement that the agreement be in writing.

### 8. Specific Exemptions
- Employees earning $15/hour or less or $31,200/year or less
- Attorneys (professional conduct)

### 9. Recent Legislative Changes (2023-2026)
The 2019 low-wage worker ban remains the most recent major change. Maryland has considered broader reform but has not enacted additional legislation in 2023-2026.

### 10. Key Case Law
**Holloway v. Faw, Casson & Co., 78 Md. App. 364 (1989)**: Foundational Maryland case establishing the reasonableness framework and the three-factor test (legitimate interest, reasonable scope, not unduly burdensome). Remains the leading authority.

**Ruhl v. F.A. Bartlett Tree Expert Co., 245 Md. 118 (1967)**: Older but frequently cited case addressing consideration requirements and the relationship between geographic scope and reasonableness.

```json
{
  "jurisdiction": "MD",
  "jurisdiction_name": "Maryland",
  "enforceability": "enforceable_restricted",
  "salary_threshold": 31200,
  "salary_threshold_type": "annual",
  "salary_threshold_hourly": 15,
  "salary_threshold_indexed": false,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": true,
  "exemptions": ["low_wage_workers_15hr_or_less", "attorneys"],
  "key_restrictions": ["low_wage_ban", "reasonableness_test"],
  "statutory_framework": "Md. Code, Lab. & Empl. § 3-716"
}
```

---

## MASSACHUSETTS

### 1. Enforceability Status
**Enforceable with significant restrictions.** The Massachusetts Noncompetition Agreement Act (MNAA, G.L. c. 149, § 24L, effective October 1, 2018) is one of the most detailed and employee-protective non-compete frameworks in the country. It imposes strict requirements on form, duration, consideration, and scope. Non-competes entered into before October 1, 2018 are governed by prior common law.

### 2. Salary/Income Thresholds
**No direct salary threshold**, but the Act exempts nonexempt employees under the FLSA (which effectively creates a wage-based distinction). The Act also requires garden-leave payments of at least 50% of the employee's highest annualized base salary during the last 2 years, which creates a de facto economic threshold because employers must pay to enforce.

### 3. Maximum Duration
**Statutory cap: 12 months** from the date of cessation of employment. May be extended to **24 months** if the employee has breached a fiduciary duty to the employer or has unlawfully taken, physically or electronically, property belonging to the employer.

### 4. Geographic Scope Requirements
The Act requires restrictions to be reasonable in geographic scope. Courts evaluate whether the scope is necessary to protect the employer's legitimate business interest. The Act does not prescribe specific geographic rules but requires consistency with the overall reasonableness standard.

### 5. Consideration Requirements
**Statutory (garden leave or mutually agreed consideration).** For post-hire agreements:
- The Act requires either: (a) **garden-leave payments** of at least 50% of the employee's highest annualized base salary during the last 2 years of employment, paid on a pro-rata basis during the restricted period; OR (b) **other mutually agreed-upon consideration** between the employer and employee.
- For at-hire agreements, the consideration requirement is satisfied by the initial employment plus the garden-leave or mutually-agreed-consideration provision.
- Post-hire agreements must also be supported by "fair and reasonable consideration independent from the continuation of employment."

### 6. Blue Pencil Doctrine
**Reformation.** Massachusetts courts have historically reformed overbroad provisions. The MNAA does not change this, and courts continue to have authority to narrow restrictions.

### 7. Required Notice Periods
**Yes.** For at-hire agreements, the non-compete must be provided to the employee by the earlier of: (a) a formal offer of employment, or (b) 10 business days before the commencement of employment. For post-hire agreements, the non-compete must be provided at least 10 business days before the effective date. The agreement must be signed by both the employer and the employee, and must include a "notice" provision stating that the employee has the right to consult with counsel prior to signing.

### 8. Specific Exemptions
The Act prohibits non-competes for:
- **Nonexempt employees** under the FLSA
- **Undergraduate or graduate students** employed as interns
- **Employees age 18 or younger**
- **Employees terminated without cause** or laid off
- Attorneys (professional conduct)
- **Physicians** are not specifically exempted by the Act but face additional restrictions under medical practice regulations

### 9. Recent Legislative Changes (2023-2026)
The MNAA (effective 2018) remains the operative framework. No significant amendments in 2023-2026. Massachusetts continues to be one of the most employee-protective states for non-competes.

### 10. Key Case Law
**Encore Images, Inc. v. Synergie, No. MICV2013-03298 (Mass. Super. Ct. 2013)**: Pre-MNAA case that helped shape the legislative reform by illustrating the need for clearer statutory standards.

**NovaBay Pharmaceuticals, Inc. v. ATTO Bioscience, Inc. (Mass. App. Ct.)**: Pre-MNAA case establishing the reasonableness framework and the court's reformation authority. Post-MNAA case law is developing as courts apply the new statutory requirements.

```json
{
  "jurisdiction": "MA",
  "jurisdiction_name": "Massachusetts",
  "enforceability": "enforceable_restricted",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": 12,
  "max_duration_breach_months": 24,
  "max_duration_statutory_cap": true,
  "blue_pencil": "reformation",
  "notice_required_days": 10,
  "notice_type": "business_days",
  "garden_leave_required": true,
  "garden_leave_minimum_pct": 50,
  "garden_leave_alternative": "mutually agreed consideration",
  "consideration_posthire": "statutory",
  "independent_consideration_recommended": true,
  "exemptions": ["nonexempt_flsa_employees", "interns", "employees_under_18", "terminated_without_cause", "laid_off_employees", "attorneys"],
  "key_restrictions": ["12_month_statutory_cap", "garden_leave_or_agreed_consideration", "10_business_day_notice", "attorney_consultation_notice", "no_enforcement_against_terminated_without_cause"],
  "statutory_framework": "G.L. c. 149, § 24L (MNAA)"
}
```

---

## MICHIGAN

### 1. Enforceability Status
**Generally enforceable.** Michigan's Antitrust Reform Act (MCL § 445.774a) specifically authorizes non-compete agreements, reversing earlier common law hostility. The statute provides that non-competes are enforceable if they are "reasonable in duration, geographical area, and the type of employment or line of business."

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts evaluate reasonableness. One to three years has been upheld depending on the circumstances.

### 4. Geographic Scope Requirements
Must be reasonable and related to the employer's business territory. Michigan courts have upheld statewide restrictions for employers with statewide operations.

### 5. Consideration Requirements
**Continued employment suffices.** Michigan courts consistently hold that continued at-will employment is adequate consideration for post-hire non-competes.

### 6. Blue Pencil Doctrine
**Reformation.** MCL § 445.774a explicitly authorizes courts to "limit a covenant that is found to be unreasonable and to enforce the covenant as limited."

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorneys are subject to professional conduct rules.

### 9. Recent Legislative Changes (2023-2026)
No significant changes. Michigan's statutory framework (1987) remains stable.

### 10. Key Case Law
**Bristol Window & Door, Inc. v. Hoogenstyn, 250 Mich. App. 478 (2002)**: Key case applying the statutory framework and the reformation doctrine under MCL § 445.774a.

**Covisint Corp. v. Bosotti, No. 04-40371 (E.D. Mich. 2004)**: Applied the reasonableness test under the Michigan statute, analyzing duration, geographic scope, and scope of restricted activity.

```json
{
  "jurisdiction": "MI",
  "jurisdiction_name": "Michigan",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 36,
  "blue_pencil": "reformation",
  "blue_pencil_statutory": true,
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test", "statutory_authorization"],
  "statutory_framework": "MCL § 445.774a"
}
```

---

## MINNESOTA

### 1. Enforceability Status
**BANNED.** Minnesota enacted a comprehensive ban on non-compete agreements effective July 1, 2023 (Minn. Stat. § 181.988). All non-compete agreements entered into on or after July 1, 2023 are void and unenforceable. This makes Minnesota one of only a handful of states with a categorical ban.

### 2. Salary/Income Thresholds
**Not applicable.** The ban is absolute regardless of compensation level.

### 3. Maximum Duration
**Not applicable.** All durations are void.

### 4. Geographic Scope Requirements
**Not applicable.**

### 5. Consideration Requirements
**Not applicable.**

### 6. Blue Pencil Doctrine
**Not applicable.** Courts will not reform a categorically prohibited agreement.

### 7. Required Notice Periods
**Not applicable to non-competes.** The statute voids the agreements regardless of notice.

### 8. Specific Exemptions
The ban applies to all non-compete agreements. Exceptions (where non-competes remain permissible):
- **Sale or dissolution of a business** (agreements entered into in connection with the sale, purchase, or dissolution of a business)
- Non-competes entered into **before July 1, 2023** remain governed by prior law (and are enforceable if reasonable under pre-ban standards)

**Important**: The ban does NOT prohibit:
- Non-solicitation agreements (of customers or employees)
- Non-disclosure/confidentiality agreements
- Non-compete provisions in separation/severance agreements that are entered into after the employment relationship ends (with separate consideration)
- Garden-leave arrangements (where the employee is paid during the restriction)

### 9. Recent Legislative Changes (2023-2026)
**Minn. Stat. § 181.988 (effective July 1, 2023)**: The foundational ban. Part of a broader employment law reform package. No amendments or modifications in 2024-2026.

### 10. Key Case Law
**Pre-ban**: *Bennett v. Storz Broadcasting Co., 270 Minn. 525 (1965)* was the leading pre-ban authority establishing the reasonableness framework. This is now largely superseded for post-July 2023 agreements.

```json
{
  "jurisdiction": "MN",
  "jurisdiction_name": "Minnesota",
  "enforceability": "banned",
  "effective_date": "2023-07-01",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": 0,
  "blue_pencil": "not_applicable",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "not_applicable",
  "independent_consideration_recommended": false,
  "exemptions": ["all_employees_banned"],
  "exceptions": ["sale_of_business", "pre_july_2023_agreements"],
  "nonsolicitation_permitted": true,
  "nda_permitted": true,
  "key_restrictions": ["categorical_ban_post_july_2023"],
  "statutory_framework": "Minn. Stat. § 181.988"
}
```

---

## MISSISSIPPI

### 1. Enforceability Status
**Generally enforceable.** Mississippi applies a common law reasonableness test. Non-competes must protect a legitimate employer interest and be reasonable in scope.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts apply reasonableness. One to two years is the typical range.

### 4. Geographic Scope Requirements
Reasonableness standard. Geographic restrictions must be tied to the employer's actual territory.

### 5. Consideration Requirements
**Continued employment generally suffices.** Mississippi courts have generally accepted continued employment as adequate consideration.

### 6. Blue Pencil Doctrine
**Reformation.** Mississippi courts will modify overbroad provisions.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**No broad statutory exemptions.**

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes.

### 10. Key Case Law
**Frierson v. Sheppard Building Supply Co., 247 Miss. 157 (1963)**: Foundational case establishing the reasonableness framework for Mississippi non-competes.

**Lampton v. Diaz, 639 So. 2d 1308 (Miss. 1994)**: Applied the reasonableness test and addressed the reformation authority of Mississippi courts.

```json
{
  "jurisdiction": "MS",
  "jurisdiction_name": "Mississippi",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": [],
  "key_restrictions": ["reasonableness_test"],
  "statutory_framework": null
}
```

---

## MISSOURI

### 1. Enforceability Status
**Generally enforceable.** Missouri applies a reasonableness test. Non-competes must protect a legitimate employer interest and be reasonable in scope, duration, and geographic area. Missouri courts are moderate, neither strongly pro-employer nor strongly pro-employee.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts evaluate under reasonableness. One to two years is typical. Three-year restrictions have sometimes been upheld.

### 4. Geographic Scope Requirements
Must be reasonable and tied to the employer's actual area of operations or the employee's area of responsibility.

### 5. Consideration Requirements
**Independent consideration required for post-hire.** Missouri courts have increasingly held that continued at-will employment alone is not adequate consideration for a post-hire non-compete. Independent consideration such as a raise, bonus, promotion, or access to confidential information is required. At hire, the employment offer itself suffices.

### 6. Blue Pencil Doctrine
**Reformation (with some reluctance).** Missouri courts have the authority to reform but have been somewhat inconsistent in exercising it. Some decisions reform; others void the entire restriction. The trend is toward reformation, but the outcome is less predictable than in states with statutory reformation authority.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**Secretaries of State** have issued guidance suggesting limitations on non-competes in certain contexts, but there are no broad statutory exemptions. Attorneys are subject to professional conduct rules.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes. Missouri has considered non-compete reform but has not enacted comprehensive legislation.

### 10. Key Case Law
**Whelan Security Co. v. Kennebrew, 379 S.W.3d 835 (Mo. 2012)**: Key Missouri case addressing consideration requirements for post-hire non-competes. The court held that continued employment alone was insufficient consideration for a non-compete signed after the start of employment.

**Healthcare Services of the Ozarks, Inc. v. Copeland, 198 S.W.3d 604 (Mo. 2006)**: Addressed reasonableness and the reformation doctrine, providing guidance on how Missouri courts analyze overbroad restrictions.

```json
{
  "jurisdiction": "MO",
  "jurisdiction_name": "Missouri",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "hybrid",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "independent_required",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test", "independent_consideration_required_posthire"],
  "statutory_framework": null
}
```

---

## MONTANA

### 1. Enforceability Status
**Generally enforceable but somewhat restrictive.** Mont. Code Ann. § 28-2-703 et seq. governs non-competes. The statute permits non-competes where the restriction is "necessary" for the protection of the employer. Montana courts construe non-competes narrowly and favor employee mobility.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts apply reasonableness. One to two years is the general standard.

### 4. Geographic Scope Requirements
Must be reasonably related to the employer's business area. Montana's rural character may affect the analysis of what constitutes a reasonable geographic restriction.

### 5. Consideration Requirements
**Continued employment generally suffices** at hire. For post-hire, independent consideration is recommended given Montana's employee-protective orientation.

### 6. Blue Pencil Doctrine
**Reformation**, but courts are cautious and may decline to reform in cases of significant overreach.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**No broad statutory exemptions.**

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes.

### 10. Key Case Law
**Dobbins, DeGuire & Tucker, P.C. v. Rutherford, McDonald & Olson, 299 Mont. 480 (1999)**: Key Montana Supreme Court case establishing the enforceability framework and the "necessity" standard under the statute.

```json
{
  "jurisdiction": "MT",
  "jurisdiction_name": "Montana",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": true,
  "exemptions": [],
  "key_restrictions": ["necessity_standard", "narrowly_construed"],
  "statutory_framework": "Mont. Code Ann. § 28-2-703 et seq."
}
```

---

## NEBRASKA

### 1. Enforceability Status
**Enforceable but with the strictest blue pencil rule in the country.** Nebraska enforces non-competes under a reasonableness test, but critically, Nebraska follows the **strict "red pencil"** doctrine: courts will NOT reform overbroad restrictions. If any provision is unreasonable, the entire covenant is void. This makes precision in drafting absolutely essential in Nebraska.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts apply reasonableness. Three years has been upheld in some cases, but shorter durations are safer given the red pencil risk.

### 4. Geographic Scope Requirements
Must be reasonable. Given the red pencil doctrine, geographic overreach will void the entire agreement, making precision critical.

### 5. Consideration Requirements
**Continued employment suffices.** Nebraska courts have accepted continued at-will employment as adequate consideration.

### 6. Blue Pencil Doctrine
**STRICT VOID (Red Pencil).** This is Nebraska's most critical feature. Courts will NOT modify or reform overbroad non-competes. If the duration is too long, the geography too broad, or the scope of activity too wide, the entire covenant is void. The court will not save it by narrowing. This means every single element must be defensibly reasonable as written. There is no safety net.

Practical example: A non-compete restricting an employee from working in "any capacity" for a competitor for 2 years within 100 miles would be evaluated holistically. If the "any capacity" language is deemed overbroad (e.g., the employee was a salesperson and should only be restricted from sales roles), the entire covenant is void. The court will not reform "any capacity" to "sales positions."

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**No broad statutory exemptions.**

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes.

### 10. Key Case Law
**Polly v. Ray D. Hilderman & Co., 407 N.W.2d 751 (Neb. 1987)**: Seminal Nebraska case establishing the strict red pencil doctrine. The court refused to reform an overbroad non-compete and voided it entirely.

**Whitten v. Malcolm Hein, P.C., 266 Neb. 814 (2004)**: Reinforced the red pencil doctrine. The court held that because the non-compete was overbroad in geographic scope, it was entirely unenforceable and could not be reformed.

```json
{
  "jurisdiction": "NE",
  "jurisdiction_name": "Nebraska",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 36,
  "blue_pencil": "strict_void",
  "blue_pencil_critical": true,
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": [],
  "key_restrictions": ["red_pencil_no_reformation", "must_be_precisely_drafted", "reasonableness_test"],
  "statutory_framework": null,
  "drafting_note": "CRITICAL: Every element must be independently reasonable as written. No judicial safety net."
}
```

---

## NEVADA

### 1. Enforceability Status
**Enforceable with statutory framework.** NRS § 613.195 (as amended effective 2017) provides a comprehensive statutory framework. Non-competes must be supported by valuable consideration, reasonable in scope, and not impose an undue hardship on the employee. Importantly, if an employer terminates an employee (other than for cause), the employer must continue paying the employee during the non-compete period.

### 2. Salary/Income Thresholds
**None** as a threshold for enforceability, but the continued-payment requirement for involuntarily terminated employees creates a de facto economic burden.

### 3. Maximum Duration
**No statutory cap**, but the statute requires reasonableness. The continued-payment obligation for terminated employees incentivizes shorter durations. One to two years is the standard range.

### 4. Geographic Scope Requirements
Must be reasonable. The statute does not prescribe specific geographic rules. Courts evaluate whether the restriction is tied to the employer's actual business area.

### 5. Consideration Requirements
**Continued employment suffices at hire.** The statute requires "valuable consideration." For post-hire agreements, additional consideration beyond continued employment may be required, though the statute is not explicit on this point.

### 6. Blue Pencil Doctrine
**Reformation (mandatory).** NRS § 613.195(4) states: "If an employer brings an action to enforce a noncompetition covenant and the court finds the covenant is supported by valuable consideration but is unreasonable, the court shall revise the covenant to the extent necessary and enforce the covenant as revised." This is mandatory reformation language.

### 7. Required Notice Periods
**None specified.** However, the agreement must be in writing.

### 8. Specific Exemptions
**No broad categorical exemptions.** However, the continued-payment requirement for employees terminated without cause effectively deters enforcement in many termination scenarios.

### 9. Recent Legislative Changes (2023-2026)
The 2017 amendment (requiring continued payment for terminated employees and mandatory reformation) remains the most recent significant change. No additional amendments in 2023-2026.

### 10. Key Case Law
**Golden Road Motor Inn, Inc. v. Islam, 132 Nev. 476 (2016)**: Pre-2017 amendment case, but the Nevada Supreme Court addressed the reasonableness framework. Post-amendment, the statutory framework largely controls, but courts continue to apply reasonableness principles within the statutory structure.

```json
{
  "jurisdiction": "NV",
  "jurisdiction_name": "Nevada",
  "enforceability": "enforceable_restricted",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "blue_pencil_mandatory": true,
  "notice_required_days": null,
  "garden_leave_required": false,
  "garden_leave_required_if_terminated": true,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": true,
  "exemptions": [],
  "key_restrictions": ["continued_payment_if_terminated_without_cause", "mandatory_reformation", "reasonableness_test"],
  "statutory_framework": "NRS § 613.195"
}
```

---

## NEW HAMPSHIRE

### 1. Enforceability Status
**Enforceable with restrictions.** RSA § 275:70 (effective 2019) prohibits non-competes for low-wage workers and requires disclosure. For all other employees, the standard reasonableness test applies.

### 2. Salary/Income Thresholds
**Yes.** Non-competes are prohibited for employees who are paid on an hourly basis or who earn less than or equal to **200% of the federal minimum wage** (currently $14.50/hour as of the federal minimum wage of $7.25/hour; verify for any federal minimum wage increases). The statute also prohibits non-competes for employees who qualify as "nonexempt" under the FLSA.

### 3. Maximum Duration
**No statutory cap.** Courts apply reasonableness.

### 4. Geographic Scope Requirements
Must be reasonable and related to the employer's business territory.

### 5. Consideration Requirements
**Statutory.** For new hires, the employer must provide a copy of the non-compete prior to the employee's acceptance of the offer of employment. For post-hire agreements, the employer must provide adequate consideration beyond continued employment.

### 6. Blue Pencil Doctrine
**Reformation.** New Hampshire courts generally follow the reformation approach.

### 7. Required Notice Periods
**Yes.** The employer must disclose the non-compete to the prospective employee before the employee accepts the offer of employment. No specific number of days is prescribed, but the disclosure must be before acceptance.

### 8. Specific Exemptions
- Employees paid hourly
- Employees earning at or below 200% of the federal minimum wage
- Nonexempt employees under the FLSA
- Attorneys (professional conduct)

### 9. Recent Legislative Changes (2023-2026)
The 2019 statute remains the operative framework. No significant amendments in 2023-2026.

### 10. Key Case Law
New Hampshire's post-statute case law is limited. Pre-statute, *Merrimack Valley Wood Products, Inc. v. Near, 152 N.H. 192 (2005)* established the reasonableness framework.

```json
{
  "jurisdiction": "NH",
  "jurisdiction_name": "New Hampshire",
  "enforceability": "enforceable_restricted",
  "salary_threshold": null,
  "salary_threshold_hourly_cap": 14.50,
  "salary_threshold_basis": "200% federal minimum wage",
  "salary_threshold_type": "hourly",
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "notice_required_before_acceptance": true,
  "garden_leave_required": false,
  "consideration_posthire": "independent_required",
  "independent_consideration_recommended": true,
  "exemptions": ["hourly_workers", "low_wage_workers_200pct_min_wage", "nonexempt_flsa", "attorneys"],
  "key_restrictions": ["low_wage_ban", "pre_acceptance_disclosure", "reasonableness_test"],
  "statutory_framework": "RSA § 275:70"
}
```

---

## NEW JERSEY

### 1. Enforceability Status
**Generally enforceable.** New Jersey has no specific non-compete statute and relies on well-developed common law. Non-competes are analyzed under the three-part test from *Solari*: (1) the restriction protects a legitimate interest, (2) it does not impose undue hardship on the employee, and (3) it is not injurious to the public interest. New Jersey courts are moderate, leaning slightly employee-protective.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts apply reasonableness. One to two years is the standard range.

### 4. Geographic Scope Requirements
Must be reasonable and tied to the employer's actual competitive territory. New Jersey courts scrutinize geographic scope carefully.

### 5. Consideration Requirements
**Independent consideration required for post-hire.** New Jersey courts have held that continued employment alone is generally not sufficient consideration for a post-hire non-compete. Additional consideration such as a raise, bonus, promotion, or access to confidential information is required. At hire, the employment offer suffices.

### 6. Blue Pencil Doctrine
**Reformation.** New Jersey courts will modify overbroad restrictions to make them enforceable. The court reforms the restriction to the minimum necessary to protect the employer's legitimate interest.

### 7. Required Notice Periods
**None.** However, New Jersey has considered non-compete reform legislation that would impose notice requirements.

### 8. Specific Exemptions
**No broad statutory exemptions.** New Jersey has considered but not enacted specific exemptions. Attorneys are subject to professional conduct limitations.

### 9. Recent Legislative Changes (2023-2026)
New Jersey has introduced multiple non-compete reform bills in recent legislative sessions (including proposed bans for workers below certain income thresholds, notice requirements, and duration caps), but none have been enacted as of early 2025. The legislative trajectory suggests reform may be forthcoming.

### 10. Key Case Law
**Solari Industries, Inc. v. Malady, 55 N.J. 571 (1970)**: The foundational New Jersey case establishing the three-part test for non-compete enforceability. Remains the controlling authority.

**ADP, LLC v. Rafferty, 2017 WL 5507568 (D.N.J. 2017)**: Applied the Solari framework in a modern context, addressing the scope of non-compete restrictions for senior executives in the technology/services industry.

```json
{
  "jurisdiction": "NJ",
  "jurisdiction_name": "New Jersey",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "independent_required",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys"],
  "key_restrictions": ["three_part_solari_test", "independent_consideration_required_posthire"],
  "statutory_framework": null
}
```

---

## NEW MEXICO

### 1. Enforceability Status
**Generally enforceable.** New Mexico applies a common law reasonableness test. Non-competes must protect a legitimate interest and be reasonable in scope. New Mexico case law is relatively undeveloped compared to most states.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Reasonableness standard. One to two years is the general benchmark.

### 4. Geographic Scope Requirements
Must be reasonable and tied to the employer's territory.

### 5. Consideration Requirements
**Unclear for post-hire.** New Mexico case law is thin on the consideration question. Independent consideration for post-hire agreements is recommended.

### 6. Blue Pencil Doctrine
**Unclear/likely reformation.** Limited case law. Most practitioners assume reformation is available, but the question has not been definitively resolved by the New Mexico Supreme Court.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**Health care practitioners**: N.M. Stat. § 24-1I-2 (effective 2015) restricts non-competes for certain health care practitioners, requiring that the restriction be reasonable and not prevent the practitioner from providing services to patients.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes beyond the health care practitioner provision.

### 10. Key Case Law
**Bowen v. Carlsbad Insurance & Real Estate, Inc., 104 N.M. 514 (1986)**: The most frequently cited New Mexico case on non-competes, establishing the reasonableness framework.

```json
{
  "jurisdiction": "NM",
  "jurisdiction_name": "New Mexico",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "unclear",
  "independent_consideration_recommended": true,
  "exemptions": ["health_care_practitioners_restricted", "attorneys"],
  "key_restrictions": ["reasonableness_test", "limited_case_law"],
  "statutory_framework": "N.M. Stat. § 24-1I-2 (health care)"
}
```

---

## NEW YORK

### 1. Enforceability Status
**Generally enforceable (but reform efforts ongoing).** New York applies a reasonableness test with particular emphasis on whether the restriction is necessary to protect the employer's legitimate interest, whether it imposes undue hardship on the employee, and whether it is injurious to the public. New York courts are moderately employee-protective and apply meaningful scrutiny.

**Critical note**: In 2023, the New York legislature passed a bill that would have banned most non-competes. Governor Hochul **vetoed** the bill in December 2023. As of early 2025, non-competes remain enforceable in New York under the existing common law framework. Additional reform efforts may succeed in future legislative sessions.

### 2. Salary/Income Thresholds
**None currently.** The vetoed 2023 bill would have included salary thresholds, but no threshold is in effect.

### 3. Maximum Duration
**No statutory cap.** Courts evaluate reasonableness. One to two years is the standard range, with one year being the most commonly upheld duration. Restrictions beyond 2 years are rarely enforced.

### 4. Geographic Scope Requirements
Must be reasonable and tailored to the employer's competitive area. New York courts examine whether the geographic restriction corresponds to the employee's actual area of work or customer contact. For New York City-based employers in national industries, courts may accept broader restrictions.

### 5. Consideration Requirements
**Continued employment generally suffices.** New York courts have generally held that continued at-will employment constitutes adequate consideration for post-hire non-competes. However, some lower court decisions have suggested that continued employment for only a brief period may be insufficient. Independent consideration is recommended.

### 6. Blue Pencil Doctrine
**Reformation.** New York courts will "partially enforce" overbroad restrictions by modifying them to be reasonable. The Court of Appeals has endorsed this approach. Courts reform on an equitable basis, considering the employer's good faith and the degree of overreach.

### 7. Required Notice Periods
**None currently.** The vetoed 2023 bill included notice requirements.

### 8. Specific Exemptions
**Broadcast employees**: N.Y. Lab. Law § 202-k (effective 2019) prohibits non-competes for broadcast employees.
- Attorneys (professional conduct)

### 9. Recent Legislative Changes (2023-2026)
**2023 Non-Compete Ban Bill (vetoed)**: Both houses of the New York legislature passed a bill in 2023 that would have banned non-competes for most workers. Governor Hochul vetoed it in December 2023, citing concerns about the bill's impact on high-earning executives and its breadth. The governor expressed willingness to sign a narrower bill with income thresholds.

**N.Y. Lab. Law § 202-k (2019)**: Prohibits non-competes for broadcast employees (on-air talent, reporters, photographers, editors, producers, and others who regularly appear on air or are involved in the creation of content for broadcast).

Additional reform legislation is expected in future sessions. The trajectory in New York is clearly toward restriction, even if the timeline is uncertain.

### 10. Key Case Law
**BDO Seidman, LLP v. Hirshberg, 93 N.Y.2d 382 (1999)**: The leading New York Court of Appeals decision on non-competes. Established the three-part test (legitimate interest, no undue hardship, no injury to public) and endorsed the reformation doctrine. The court held that non-competes must be necessary to protect the employer's legitimate interest and that a reasonable alternative to the broad restriction should be considered.

**Brown & Brown, Inc. v. Johnson, 25 N.Y.3d 364 (2015)**: Addressed employee forfeiture clauses (forfeiture-for-competition provisions) and their distinction from traditional non-competes. The court held that such provisions are subject to a less stringent standard of review because they do not restrain the employee from working but instead impose an economic consequence.

```json
{
  "jurisdiction": "NY",
  "jurisdiction_name": "New York",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 12,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": true,
  "exemptions": ["broadcast_employees", "attorneys"],
  "key_restrictions": ["reasonableness_test", "three_part_test", "reform_legislation_pending"],
  "statutory_framework": "N.Y. Lab. Law § 202-k (broadcast ban)",
  "legislative_note": "2023 ban bill vetoed; narrower reform expected"
}
```

---

## NORTH CAROLINA

### 1. Enforceability Status
**Generally enforceable.** North Carolina applies a common law reasonableness test. Non-competes must be in writing, supported by valuable consideration, reasonable as to time and territory, and designed to protect a legitimate business interest.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts apply reasonableness. Five years has occasionally been upheld in specific contexts, but 2 years is the more common benchmark.

### 4. Geographic Scope Requirements
Must be reasonable and tied to the employer's business territory. North Carolina courts scrutinize geographic scope but have upheld statewide and multistate restrictions for appropriate businesses.

### 5. Consideration Requirements
**At hire**: The employment relationship is adequate consideration.
**Post-hire**: North Carolina law is somewhat unclear. The traditional rule required independent consideration, but the North Carolina Court of Appeals has held that continued at-will employment may suffice. The safest approach is to provide independent consideration for post-hire agreements.

### 6. Blue Pencil Doctrine
**Reformation (strict blue pencil).** North Carolina courts employ a "strict" blue pencil that allows them to strike portions of an overbroad restriction but NOT to rewrite or add terms. The court can cross out language to narrow the restriction but cannot insert new language. This means provisions must be drafted with severability in mind (e.g., tiered restrictions that can survive partial deletion).

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorneys are subject to professional conduct limitations.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes. North Carolina has not enacted comprehensive non-compete reform.

### 10. Key Case Law
**Hartman v. W.H. Odell and Associates, Inc., 450 S.E.2d 912 (N.C. App. 1994)**: Key case establishing the strict blue pencil doctrine in North Carolina, holding that courts may strike overbroad terms but cannot rewrite the covenant.

**VisionAIR, Inc. v. James, 167 N.C. App. 504 (2004)**: Applied the reasonableness test and addressed the adequacy of consideration for post-hire non-competes.

```json
{
  "jurisdiction": "NC",
  "jurisdiction_name": "North Carolina",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "hybrid",
  "blue_pencil_note": "Strict blue pencil: can strike but cannot rewrite",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "unclear",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys"],
  "key_restrictions": ["must_be_in_writing", "strict_blue_pencil", "reasonableness_test"],
  "statutory_framework": null
}
```

---

## NORTH DAKOTA

### 1. Enforceability Status
**LARGELY BANNED.** N.D. Cent. Code § 9-08-06 provides: "Every contract by which anyone is restrained from exercising a lawful profession, trade, or business of any kind is to that extent void." This is nearly identical to California's § 16600. The ban has been in effect since North Dakota's territorial period and is one of the oldest and most absolute non-compete prohibitions in the United States.

### 2. Salary/Income Thresholds
**Not applicable.** The ban is absolute regardless of compensation.

### 3. Maximum Duration
**Not applicable.**

### 4. Geographic Scope Requirements
**Not applicable.**

### 5. Consideration Requirements
**Not applicable.**

### 6. Blue Pencil Doctrine
**Not applicable.** Courts will not reform a categorically void agreement.

### 7. Required Notice Periods
**Not applicable.**

### 8. Specific Exemptions
The ban covers all employment non-competes. The only exceptions are:
- **Sale of the goodwill of a business** or the disassociation from a partnership
- Non-solicitation agreements may be enforceable in limited circumstances (though the case law is thin)
- Nondisclosure/confidentiality agreements are not affected by the ban

### 9. Recent Legislative Changes (2023-2026)
No significant changes. The ban has been stable for over a century.

### 10. Key Case Law
**Warner & Co. v. Solberg, 326 N.W.2d 51 (N.D. 1982)**: Confirmed the broad scope of § 9-08-06, holding that non-competes are void as a matter of public policy. The court rejected any attempt to apply a reasonableness test.

**K & K Recycling, Inc. v. Stodt, 2005 ND 72**: Reaffirmed the ban and clarified the narrow sale-of-business exception.

```json
{
  "jurisdiction": "ND",
  "jurisdiction_name": "North Dakota",
  "enforceability": "banned",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": 0,
  "blue_pencil": "not_applicable",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "not_applicable",
  "independent_consideration_recommended": false,
  "exemptions": ["all_employees_banned"],
  "exceptions": ["sale_of_business", "partnership_disassociation"],
  "nonsolicitation_permitted": "limited",
  "nda_permitted": true,
  "key_restrictions": ["categorical_ban"],
  "statutory_framework": "N.D. Cent. Code § 9-08-06"
}
```

---

## OHIO

### 1. Enforceability Status
**Generally enforceable.** Ohio applies the reasonableness test from *Raimonde v. Van Vlerah*. Non-competes must be no greater than necessary to protect the employer's legitimate interest, must not impose undue hardship on the employee, and must not be injurious to the public.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts evaluate under reasonableness. One to three years has been upheld depending on the industry and position.

### 4. Geographic Scope Requirements
Must be reasonable and connected to the employer's business territory. Ohio courts analyze whether the geographic scope matches the employee's area of work or customer contact.

### 5. Consideration Requirements
**Continued employment generally suffices.** Ohio courts have consistently held that continued at-will employment constitutes adequate consideration for post-hire non-competes, provided employment continues for a reasonable period after signing. Seven days is likely too short; several months of continued employment strengthens the argument.

### 6. Blue Pencil Doctrine
**Reformation.** Ohio courts will modify overbroad provisions to make them reasonable. The *Raimonde* court explicitly endorsed the reformation approach.

### 7. Required Notice Periods
**None.** However, the timing of presentation may affect the consideration analysis.

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorneys are subject to professional conduct limitations.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes.

### 10. Key Case Law
**Raimonde v. Van Vlerah, 42 Ohio St. 2d 21 (1975)**: The seminal Ohio case establishing the three-part test and the reformation doctrine. Remains the controlling authority after nearly 50 years.

**Lake Land Employment Group of Akron, LLC v. Columber, 101 Ohio St. 3d 242 (2004)**: Addressed the consideration question and held that continued employment of an at-will employee constitutes adequate consideration for a post-hire non-compete.

```json
{
  "jurisdiction": "OH",
  "jurisdiction_name": "Ohio",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": ["attorneys"],
  "key_restrictions": ["three_part_raimonde_test", "reasonableness_test"],
  "statutory_framework": null
}
```

---

## OKLAHOMA

### 1. Enforceability Status
**LARGELY BANNED.** 15 O.S. § 219A provides that "[a] person who makes an agreement with an employer, whether in writing or verbally, not to compete with the employer after the employment relationship has been terminated, shall be bound by the terms of such agreement if the restraint is limited to the geographic area served by the employer" — but this language has been narrowly construed by the Oklahoma Supreme Court. Oklahoma courts have consistently held that broad non-compete agreements are void as restraints of trade. However, non-solicitation of "established customers" IS permitted.

### 2. Salary/Income Thresholds
**Not applicable.** The restriction is categorical.

### 3. Maximum Duration
**Not applicable for non-competes.** For the permitted non-solicitation of established customers, duration must be reasonable.

### 4. Geographic Scope Requirements
**Not applicable for non-competes.** For permitted non-solicitation, the restriction is limited to established customer relationships.

### 5. Consideration Requirements
**Not applicable for non-competes.**

### 6. Blue Pencil Doctrine
**Not applicable.** Courts will not reform a void non-compete into a permitted non-solicitation agreement.

### 7. Required Notice Periods
**Not applicable.**

### 8. Specific Exemptions
The ban effectively exempts all employees from non-competes. The permitted restrictions are:
- Non-solicitation of **established customers** of the former employer
- Sale-of-business non-competes (15 O.S. § 218)
- Partnership or LLC dissolution agreements
- **NDAs and confidentiality agreements** are not affected

### 9. Recent Legislative Changes (2023-2026)
No significant changes. Oklahoma's restrictive posture has been stable.

### 10. Key Case Law
**Bayly, Martin & Fay, Inc. v. Pickard, 780 P.2d 735 (Okla. 1989)**: Key Oklahoma Supreme Court case clarifying that non-compete agreements are void but non-solicitation of established customers is permitted under § 219A.

**Howard v. Nitro-Lift Technologies, LLC, 568 U.S. 17 (2012)**: US Supreme Court case arising from Oklahoma. While the Supreme Court's holding was procedural (the state court had to apply state arbitration law correctly), the underlying dispute confirmed that Oklahoma strongly disfavors non-competes.

```json
{
  "jurisdiction": "OK",
  "jurisdiction_name": "Oklahoma",
  "enforceability": "banned",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": 0,
  "blue_pencil": "not_applicable",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "not_applicable",
  "independent_consideration_recommended": false,
  "exemptions": ["all_employees_banned"],
  "exceptions": ["nonsolicitation_of_established_customers", "sale_of_business", "partnership_dissolution"],
  "nonsolicitation_permitted": true,
  "nda_permitted": true,
  "key_restrictions": ["categorical_ban_on_noncompetes", "nonsolicitation_of_established_customers_permitted"],
  "statutory_framework": "15 O.S. § 219A"
}
```

---

## OREGON

### 1. Enforceability Status
**Enforceable with significant restrictions.** ORS § 653.295 (as amended multiple times, most recently effective January 1, 2022) imposes detailed requirements. Non-competes are enforceable only for employees above a compensation threshold, with a maximum duration cap, and only when the employer has a protectable interest. Oregon is moderately employee-protective.

### 2. Salary/Income Thresholds
**Yes.** Non-competes are voidable for employees who are not engaged in "administrative, executive, or professional" work and who earn less than the **median family income for a four-person family** as determined by the US Census Bureau. As of recent data, this threshold is approximately $100,533 (verify with current Census data). The threshold is adjusted annually.

### 3. Maximum Duration
**Statutory cap: 12 months.** Effective January 1, 2022, the maximum enforceable duration is 12 months. Previously (2008-2021), the cap was 18 months. Any restriction exceeding 12 months is automatically reduced to 12 months.

### 4. Geographic Scope Requirements
Must be reasonable. Oregon courts analyze whether the geographic scope is necessary to protect the employer's interest. The 12-month duration cap applies regardless of geographic scope.

### 5. Consideration Requirements
**Statutory.** For at-hire non-competes, the employer must inform the employee in a written employment offer received at least **2 weeks before the first day of employment** that a non-compete is required. For post-hire non-competes, the restriction must be entered into upon a "subsequent bona fide advancement" of the employee. The employer must have a protectable interest (access to trade secrets, competitively sensitive confidential information, or other protectable interest).

### 6. Blue Pencil Doctrine
**Reformation.** Oregon courts will modify overbroad provisions, and the statute itself automatically reduces duration to the statutory cap.

### 7. Required Notice Periods
**Yes, 2 weeks.** The employer must provide written notice of the non-compete at least 2 weeks before the first day of employment (for at-hire agreements). For existing employees, the restriction must be entered into upon a bona fide advancement.

### 8. Specific Exemptions
- Employees below the median family income threshold
- Employees not in administrative, executive, or professional roles
- Non-competes are **voidable** (not automatically void) if the employee is terminated without cause (employee must challenge)
- The statute focuses on employees; independent contractors are not specifically covered by ORS § 653.295

### 9. Recent Legislative Changes (2023-2026)
**SB 169 (2021, effective January 1, 2022)**: Reduced the maximum enforceable duration from 18 months to 12 months and maintained the income threshold requirement. This is the most recent significant change.

No additional amendments in 2023-2026.

### 10. Key Case Law
**Nike, Inc. v. McCarthy, 379 F.3d 576 (9th Cir. 2004) (applying Oregon law)**: Pre-statutory-reform case, but frequently cited for the proposition that Oregon takes a relatively restrictive view of non-competes and requires clear evidence of a protectable interest.

```json
{
  "jurisdiction": "OR",
  "jurisdiction_name": "Oregon",
  "enforceability": "enforceable_restricted",
  "salary_threshold": 100533,
  "salary_threshold_estimated": true,
  "salary_threshold_type": "annual",
  "salary_threshold_basis": "median_family_income_4_person",
  "salary_threshold_indexed": true,
  "max_duration_months": 12,
  "max_duration_statutory_cap": true,
  "blue_pencil": "reformation",
  "notice_required_days": 14,
  "notice_required_before_first_day": true,
  "garden_leave_required": false,
  "consideration_posthire": "statutory",
  "consideration_posthire_note": "Must be upon bona fide advancement",
  "independent_consideration_recommended": true,
  "exemptions": ["below_median_income_workers", "non_administrative_executive_professional", "attorneys"],
  "key_restrictions": ["12_month_statutory_cap", "2_week_advance_notice", "income_threshold", "protectable_interest_required", "voidable_if_terminated_without_cause"],
  "statutory_framework": "ORS § 653.295"
}
```

---

## PENNSYLVANIA

### 1. Enforceability Status
**Generally enforceable.** Pennsylvania applies a common law reasonableness test. Non-competes are enforceable if they are ancillary to an employment relationship, supported by adequate consideration, reasonable in scope (time, geography, and activity), and designed to protect a legitimate business interest.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts apply reasonableness. One to two years is typical.

### 4. Geographic Scope Requirements
Must be reasonable and connected to the employer's business territory.

### 5. Consideration Requirements
**Independent consideration required for post-hire.** This is a critical Pennsylvania rule. Pennsylvania courts have consistently held that continued at-will employment is **NOT sufficient consideration** for a post-hire non-compete. The employee must receive new and valuable consideration at the time of signing, such as a raise, promotion, bonus, change in job responsibilities, or access to confidential information. At hire, the job itself is adequate consideration.

### 6. Blue Pencil Doctrine
**Reformation.** Pennsylvania courts will modify overbroad restrictions to make them reasonable. Courts reform on an equitable basis.

### 7. Required Notice Periods
**None.** No statutory notice requirement.

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorneys are subject to professional conduct limitations.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes. Pennsylvania has considered non-compete reform but has not enacted comprehensive legislation.

### 10. Key Case Law
**Hess v. Gebhard & Co., 570 A.2d 518 (Pa. Super. Ct. 1990)**: Key case on the independent consideration requirement for post-hire non-competes. The court held that continued employment is not adequate consideration.

**Socko v. Mid-Atlantic Systems of CPA, Inc., 126 A.3d 1266 (Pa. 2015)**: Pennsylvania Supreme Court decision addressing the consideration requirement and the reasonableness test. Confirmed the independent-consideration rule for post-hire agreements.

```json
{
  "jurisdiction": "PA",
  "jurisdiction_name": "Pennsylvania",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "independent_required",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys"],
  "key_restrictions": ["independent_consideration_required_posthire", "reasonableness_test"],
  "statutory_framework": null
}
```

---

## RHODE ISLAND

### 1. Enforceability Status
**Enforceable with restrictions.** R.I. Gen. Laws § 28-59-1 et seq. (the Noncompete Agreement Act, effective January 15, 2020) imposes specific requirements and bans on non-competes. The statute prohibits non-competes for certain categories of workers and limits enforceability for others.

### 2. Salary/Income Thresholds
**Not explicitly** as a dollar threshold, but the statute bans non-competes for nonexempt workers under the FLSA, which creates an effective wage-based distinction.

### 3. Maximum Duration
**Statutory cap: 1 year.** The statute limits enforceable non-competes to a maximum of 12 months.

### 4. Geographic Scope Requirements
Must be reasonable. The statute does not prescribe specific geographic rules but requires overall reasonableness.

### 5. Consideration Requirements
**Statutory.** The statute requires that non-competes be part of a written agreement and supported by adequate consideration. For post-hire agreements, independent consideration beyond continued employment is recommended.

### 6. Blue Pencil Doctrine
**Reformation.** Courts may modify overbroad provisions.

### 7. Required Notice Periods
**None specified in the statute**, but the agreement must be in writing and signed.

### 8. Specific Exemptions
- **Nonexempt employees under the FLSA**
- **Undergraduate or graduate student interns**
- **Employees under 18 years of age**
- **Low-wage workers** (those classified as nonexempt)
- Non-competes are **void for employees terminated without cause** or laid off
- Attorneys (professional conduct)
- **Physicians**: The statute includes a specific provision addressing physician non-competes (limited to reasonable restrictions)

### 9. Recent Legislative Changes (2023-2026)
The 2020 statute is the most recent comprehensive change. No significant amendments in 2023-2026.

### 10. Key Case Law
Post-statute case law is limited. The statute largely codifies and supersedes prior common law.

```json
{
  "jurisdiction": "RI",
  "jurisdiction_name": "Rhode Island",
  "enforceability": "enforceable_restricted",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "salary_threshold_note": "Nonexempt FLSA employees banned",
  "max_duration_months": 12,
  "max_duration_statutory_cap": true,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "statutory",
  "independent_consideration_recommended": true,
  "exemptions": ["nonexempt_flsa_employees", "interns", "employees_under_18", "terminated_without_cause", "laid_off_employees", "attorneys"],
  "key_restrictions": ["1_year_statutory_cap", "nonexempt_ban", "void_if_terminated_without_cause"],
  "statutory_framework": "R.I. Gen. Laws § 28-59-1 et seq."
}
```

---

## SOUTH CAROLINA

### 1. Enforceability Status
**Generally enforceable.** South Carolina applies a reasonableness test. Non-competes are enforceable if they are necessary to protect a legitimate interest, reasonably limited in time and territory, and supported by adequate consideration.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts evaluate reasonableness. Two years or less is typically upheld.

### 4. Geographic Scope Requirements
Must be reasonable and tailored to the employer's actual business area. South Carolina courts scrutinize geographic scope carefully.

### 5. Consideration Requirements
**Continued employment generally suffices.** South Carolina courts have accepted continued employment as adequate consideration.

### 6. Blue Pencil Doctrine
**Reformation.** South Carolina courts will modify overbroad provisions. The South Carolina Supreme Court has endorsed the reformation approach.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorneys are subject to professional conduct limitations.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes.

### 10. Key Case Law
**Poole v. Incentives Unlimited, Inc., 345 S.C. 378 (2001)**: Key case establishing the reasonableness framework and the court's reformation authority.

**Rental Uniform Service of Florence, Inc. v. Dudley, 278 S.C. 674 (1982)**: Addressed the consideration requirement and geographic scope analysis.

```json
{
  "jurisdiction": "SC",
  "jurisdiction_name": "South Carolina",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test"],
  "statutory_framework": null
}
```

---

## SOUTH DAKOTA

### 1. Enforceability Status
**Generally enforceable.** South Dakota applies a reasonableness test under S.D. Codified Laws § 53-9-8 et seq. Non-competes are enforceable if they are reasonable in scope and supported by consideration.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts evaluate reasonableness. The limited case law suggests 2 years or less is typical.

### 4. Geographic Scope Requirements
Must be reasonable.

### 5. Consideration Requirements
**Employment suffices.** South Dakota follows the majority rule that employment is adequate consideration.

### 6. Blue Pencil Doctrine
**Reformation likely**, but case law is thin.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**No broad statutory exemptions.**

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes.

### 10. Key Case Law
**Central Monitoring Service, Inc. v. Zakinski, 553 N.W.2d 513 (S.D. 1996)**: Key case applying the reasonableness framework.

```json
{
  "jurisdiction": "SD",
  "jurisdiction_name": "South Dakota",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": [],
  "key_restrictions": ["reasonableness_test"],
  "statutory_framework": "S.D. Codified Laws § 53-9-8 et seq."
}
```

---

## TENNESSEE

### 1. Enforceability Status
**Generally enforceable.** Tennessee applies a reasonableness test. Non-competes must protect a legitimate business interest, be reasonable in scope, and be supported by adequate consideration.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts evaluate reasonableness. Two years is commonly upheld.

### 4. Geographic Scope Requirements
Must be reasonable. Tennessee courts have upheld restrictions covering the employer's entire territory.

### 5. Consideration Requirements
**Continued employment suffices at hire.** For post-hire agreements, Tennessee courts have generally held that continued employment for a substantial period is adequate consideration. Independent consideration strengthens the agreement.

### 6. Blue Pencil Doctrine
**Reformation.** Tennessee courts will modify overbroad provisions.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorneys are subject to professional conduct limitations.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes.

### 10. Key Case Law
**Murfreesboro Medical Clinic, P.A. v. Udom, 166 S.W.3d 674 (Tenn. 2005)**: Key Tennessee Supreme Court case establishing the reasonableness framework and analyzing physician non-competes. The court applied the traditional three-factor test and upheld the reformation doctrine.

**Central Adjustment Bureau, Inc. v. Ingram, 678 S.W.2d 28 (Tenn. 1984)**: Earlier case establishing the consideration requirements and the reasonableness standard.

```json
{
  "jurisdiction": "TN",
  "jurisdiction_name": "Tennessee",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": true,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test"],
  "statutory_framework": null
}
```

---

## TEXAS

### 1. Enforceability Status
**Generally enforceable.** Texas has a statutory framework (Tex. Bus. & Com. Code § 15.50-15.52) that requires non-competes to be (1) ancillary to or part of an otherwise enforceable agreement, (2) supported by consideration, and (3) reasonable in scope, duration, and geographic area. The "ancillary to an otherwise enforceable agreement" requirement was significantly relaxed by *Marsh USA v. Cook* (2011).

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts evaluate reasonableness. Two years is commonly upheld. Longer periods may be upheld for sale-of-business contexts.

### 4. Geographic Scope Requirements
Must be reasonable and tied to the employer's business territory. Texas courts have upheld statewide and multistate restrictions for employers with corresponding operations.

### 5. Consideration Requirements
**Must be ancillary to otherwise enforceable agreement.** Under *Marsh USA v. Cook*, the Texas Supreme Court held that providing access to confidential information, specialized training, or trade secrets satisfies the "otherwise enforceable agreement" requirement. The employer's promise to provide confidential information creates the consideration link. At hire, the employment offer plus the promise of confidential information access is sufficient. Post-hire, the employer must demonstrate that the non-compete is ancillary to a new or continuing exchange of consideration (e.g., ongoing access to trade secrets, additional training, promotion).

### 6. Blue Pencil Doctrine
**Reformation (mandatory by statute).** Tex. Bus. & Com. Code § 15.51(c) requires courts to reform overbroad restrictions: "If the covenant is found to be ancillary to or part of an otherwise enforceable agreement but contains limitations as to time, geographical area, or scope of activity to be restrained that are not reasonable and impose a greater restraint than is necessary to protect the goodwill or other business interest of the promisee, the court shall reform the covenant to the extent necessary to cause the limitations contained in the covenant to be reasonable."

### 7. Required Notice Periods
**None.** No statutory notice requirement.

### 8. Specific Exemptions
**Physicians**: Tex. Bus. & Com. Code § 15.50(b) imposes specific requirements on physician non-competes, including: (1) the physician must be given access to a list of patients seen or treated within the last year, (2) the physician must be allowed to provide continuing care to patients during acute treatment, and (3) the agreement must provide a buyout option at a reasonable price. These requirements do not prohibit physician non-competes but impose significant compliance obligations.

### 9. Recent Legislative Changes (2023-2026)
No significant changes to the non-compete statutory framework in 2023-2026. The physician-specific provisions have been periodically refined.

### 10. Key Case Law
**Marsh USA Inc. v. Cook, 354 S.W.3d 764 (Tex. 2011)**: Landmark Texas Supreme Court decision that relaxed the "ancillary to otherwise enforceable agreement" requirement. The court held that the employer's promise to provide confidential information or trade secrets satisfies the requirement, even if the information has not yet been provided at the time of signing. This significantly increased the enforceability of Texas non-competes.

**Alex Sheshunoff Management Services, L.P. v. Johnson, 209 S.W.3d 644 (Tex. 2006)**: Pre-*Marsh* case that articulated the ancillary requirement and the relationship between consideration and enforceability. Partially superseded by *Marsh* but still cited for its analytical framework.

```json
{
  "jurisdiction": "TX",
  "jurisdiction_name": "Texas",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "blue_pencil_mandatory": true,
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "statutory",
  "consideration_posthire_note": "Must be ancillary to otherwise enforceable agreement (trade secrets, confidential info)",
  "independent_consideration_recommended": true,
  "exemptions": ["physicians_special_requirements"],
  "key_restrictions": ["ancillary_to_enforceable_agreement", "mandatory_reformation", "reasonableness_test"],
  "statutory_framework": "Tex. Bus. & Com. Code § 15.50-15.52"
}
```

---

## UTAH

### 1. Enforceability Status
**Enforceable with restrictions.** Utah's Post-Employment Restrictions Act (Utah Code § 34-51-101 et seq., effective May 10, 2016) imposes a 1-year maximum duration and requires that non-competes be supported by consideration.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**Statutory cap: 1 year.** Utah Code § 34-51-201. Any post-employment restrictive covenant with a duration exceeding 1 year is void and unenforceable. This is an absolute cap, not a presumption.

### 4. Geographic Scope Requirements
Must be reasonable. The statute does not prescribe specific geographic rules.

### 5. Consideration Requirements
**Employment suffices at hire.** The statute does not impose specific independent consideration requirements. Continued employment is generally sufficient for at-will employees.

### 6. Blue Pencil Doctrine
**Reformation.** Utah courts will modify overbroad provisions, subject to the 1-year statutory cap.

### 7. Required Notice Periods
**None specified.**

### 8. Specific Exemptions
**Broadcasting employees**: Utah Code § 34-51-301 prohibits non-competes for broadcasting employees.

### 9. Recent Legislative Changes (2023-2026)
The 2016 statute remains the operative framework. No significant amendments in 2023-2026.

### 10. Key Case Law
**System Concepts, Inc. v. Dixon, 669 P.2d 421 (Utah 1983)**: Pre-statute case establishing the reasonableness framework. The 2016 statute largely codifies and modifies the prior framework by imposing the 1-year cap.

```json
{
  "jurisdiction": "UT",
  "jurisdiction_name": "Utah",
  "enforceability": "enforceable_restricted",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": 12,
  "max_duration_statutory_cap": true,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": ["broadcast_employees", "attorneys"],
  "key_restrictions": ["1_year_statutory_cap", "reasonableness_test"],
  "statutory_framework": "Utah Code § 34-51-101 et seq."
}
```

---

## VERMONT

### 1. Enforceability Status
**Generally enforceable.** Vermont applies a common law reasonableness test. Non-competes must be reasonable in scope and supported by adequate consideration. Vermont's limited case law leaves some questions unsettled.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Reasonableness standard applies.

### 4. Geographic Scope Requirements
Must be reasonable.

### 5. Consideration Requirements
**Unclear for post-hire.** Independent consideration for post-hire agreements is recommended given the limited case law.

### 6. Blue Pencil Doctrine
**Unclear/likely reformation.** Vermont case law has not definitively resolved this question.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**No broad statutory exemptions.**

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes.

### 10. Key Case Law
**Bourne v. Fournier, 178 Vt. 233 (2004)**: The most frequently cited Vermont case on non-competes, applying the reasonableness test.

```json
{
  "jurisdiction": "VT",
  "jurisdiction_name": "Vermont",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "unclear",
  "independent_consideration_recommended": true,
  "exemptions": [],
  "key_restrictions": ["reasonableness_test", "limited_case_law"],
  "statutory_framework": null
}
```

---

## VIRGINIA

### 1. Enforceability Status
**Enforceable with restrictions.** Virginia enacted Va. Code § 40.1-28.7:8 (effective July 1, 2020), which prohibits non-competes for "low-wage employees." For other employees, the common law reasonableness test applies, and Virginia courts are generally strict in their analysis.

### 2. Salary/Income Thresholds
**Yes.** Non-competes are prohibited for "low-wage employees," defined as those whose average weekly earnings are less than the **average weekly wage of the Commonwealth** as determined by the Virginia Employment Commission. As of recent data, this threshold is approximately $1,343/week (approximately $69,836/year). The threshold is adjusted annually. Additionally, employees who are **paid on an hourly basis** are classified as low-wage employees regardless of their hourly rate, making all hourly workers exempt from non-competes.

### 3. Maximum Duration
**No statutory cap.** Courts apply reasonableness, but Virginia courts are relatively strict. One to two years is typical, with courts frequently finding restrictions beyond 1 year to be suspect.

### 4. Geographic Scope Requirements
Must be reasonable and narrowly tailored. Virginia courts are strict about geographic overbreadth. Restrictions must be specifically defined and tied to the employer's actual competitive territory.

### 5. Consideration Requirements
**Continued employment generally suffices at hire.** For post-hire, Virginia courts have been inconsistent. Some decisions require independent consideration; others accept continued employment. Independent consideration is strongly recommended.

### 6. Blue Pencil Doctrine
**Historically strict void (red pencil trend).** Virginia has traditionally followed a strict approach, declining to reform overbroad restrictions. Several decisions from the Virginia Supreme Court suggest that courts will void an overbroad non-compete rather than reform it. However, there are lower court decisions applying reformation. The safest assumption is that Virginia will NOT reform, making precise drafting essential.

### 7. Required Notice Periods
**None beyond the low-wage posting requirement.** Employers must post a notice informing low-wage employees of the prohibition.

### 8. Specific Exemptions
- **Low-wage employees** (below average weekly wage of the Commonwealth)
- **All hourly workers** (regardless of rate)
- **Independent contractors earning less than the threshold**
- Attorneys (professional conduct)

### 9. Recent Legislative Changes (2023-2026)
**Va. Code § 40.1-28.7:8 (effective July 1, 2020)**: The foundational low-wage worker ban. This remains the most significant recent change. No major amendments in 2023-2026.

### 10. Key Case Law
**Assurance Data, Inc. v. Malyevac, 286 Va. 137 (2013)**: Virginia Supreme Court case applying the strict enforceability standard. The court voided a non-compete that was overbroad in functional scope, declining to reform.

**Home Health Corp. of America, Inc. v. Rosow (Va. Sup. Ct.)**: Addressed the interaction between the low-wage ban and the traditional enforceability framework.

```json
{
  "jurisdiction": "VA",
  "jurisdiction_name": "Virginia",
  "enforceability": "enforceable_restricted",
  "salary_threshold": 69836,
  "salary_threshold_estimated": true,
  "salary_threshold_type": "annual",
  "salary_threshold_weekly": 1343,
  "salary_threshold_basis": "average_weekly_wage_commonwealth",
  "salary_threshold_indexed": true,
  "hourly_workers_banned": true,
  "max_duration_months": null,
  "max_duration_presumptive_months": 12,
  "blue_pencil": "strict_void",
  "blue_pencil_note": "Virginia trend is toward red pencil; precise drafting essential",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "unclear",
  "independent_consideration_recommended": true,
  "exemptions": ["low_wage_employees", "all_hourly_workers", "attorneys"],
  "key_restrictions": ["low_wage_ban", "hourly_worker_ban", "strict_construction", "red_pencil_trend", "reasonableness_test"],
  "statutory_framework": "Va. Code § 40.1-28.7:8"
}
```

---

## WASHINGTON

### 1. Enforceability Status
**Enforceable with significant restrictions.** RCW § 49.62 (effective January 1, 2020) imposes a comprehensive statutory framework with income thresholds, duration caps, and penalty provisions. Washington is among the most restrictive states that still permit non-competes for higher earners.

### 2. Salary/Income Thresholds
**Yes.**
- **Employees**: Non-competes are void for employees earning less than **$116,593.18/year** (adjusted annually for inflation; verify current threshold with the Washington Department of Labor & Industries). The threshold is indexed to the CPI.
- **Independent contractors**: Non-competes are void for independent contractors earning less than **$291,483.00/year** (adjusted annually; approximately 2.5x the employee threshold).

### 3. Maximum Duration
**Statutory cap: 18 months** for employee non-competes. The statute provides that non-competes with a duration exceeding 18 months are presumptively unreasonable (with the burden on the employer to rebut).

### 4. Geographic Scope Requirements
Must be reasonable. The statute does not prescribe specific geographic rules but requires overall reasonableness within the statutory framework.

### 5. Consideration Requirements
**Statutory.** For at-hire agreements, employment is adequate. For post-hire agreements, the restriction must be supported by independent consideration. The statute requires that the employee be given notice of the non-compete in writing "no later than the time of the acceptance of the offer of employment."

### 6. Blue Pencil Doctrine
**Reformation**, but the statute imposes significant penalties for unreasonable restrictions. RCW § 49.62.080 provides that if a court or arbitrator reforms or rewrites a non-compete, the employer must pay the employee's actual damages or a statutory penalty of $5,000, whichever is greater, plus attorneys' fees and costs. This penalty provision substantially deters overbroad drafting.

### 7. Required Notice Periods
**Yes.** The non-compete must be disclosed to the employee in writing no later than the time of acceptance of the offer of employment. For post-hire agreements, the restriction must be supported by independent consideration.

Additionally, if an employee is terminated (other than for cause), the employer must continue to pay the employee's base salary during the enforcement period of the non-compete (a garden-leave obligation).

### 8. Specific Exemptions
- Employees earning below the employee threshold (~$116,593/year)
- Independent contractors earning below the contractor threshold (~$291,483/year)
- Employees who are laid off are entitled to continued base salary during the restricted period
- The statute does not exempt specific professions categorically

### 9. Recent Legislative Changes (2023-2026)
**RCW § 49.62 (effective January 1, 2020)**: The foundational reform. The income thresholds are adjusted annually for inflation. No significant amendments in 2023-2026 beyond threshold adjustments.

### 10. Key Case Law
The 2020 statute largely supersedes prior case law. Post-statute case law is developing. Pre-statute, *Labriola v. Pollard Group, Inc., 152 Wash. 2d 828 (2004)* was the leading authority on the consideration requirement and independent consideration for post-hire agreements.

```json
{
  "jurisdiction": "WA",
  "jurisdiction_name": "Washington",
  "enforceability": "enforceable_restricted",
  "salary_threshold": 116593,
  "salary_threshold_estimated": true,
  "salary_threshold_type": "annual",
  "salary_threshold_indexed": true,
  "salary_threshold_contractor": 291483,
  "max_duration_months": 18,
  "max_duration_statutory_cap": true,
  "blue_pencil": "reformation",
  "blue_pencil_penalty": true,
  "blue_pencil_penalty_amount": "$5,000 minimum or actual damages plus attorneys fees",
  "notice_required_days": null,
  "notice_required_at_offer_acceptance": true,
  "garden_leave_required": true,
  "garden_leave_required_if_terminated": true,
  "garden_leave_amount": "base salary during restricted period",
  "consideration_posthire": "independent_required",
  "independent_consideration_recommended": true,
  "exemptions": ["below_threshold_employees", "below_threshold_contractors", "attorneys"],
  "key_restrictions": ["income_threshold", "18_month_cap", "garden_leave_for_terminated", "reformation_penalty", "reasonableness_test"],
  "statutory_framework": "RCW § 49.62"
}
```

---

## WEST VIRGINIA

### 1. Enforceability Status
**Generally enforceable.** West Virginia applies a common law reasonableness test. Non-competes must be reasonable in scope and supported by adequate consideration.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Reasonableness standard. One to two years typical.

### 4. Geographic Scope Requirements
Must be reasonable and related to the employer's business territory.

### 5. Consideration Requirements
**Continued employment generally suffices.** West Virginia follows the majority rule.

### 6. Blue Pencil Doctrine
**Reformation.** West Virginia courts will modify overbroad provisions.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**Physicians**: W. Va. Code § 47-11E-1 et seq. imposes specific requirements on physician non-competes, including buyout provisions and patient notification requirements.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes.

### 10. Key Case Law
**Basicomputer Corp. v. Scott, 191 W. Va. 655 (1994)**: Key West Virginia case establishing the reasonableness framework and the reformation doctrine.

```json
{
  "jurisdiction": "WV",
  "jurisdiction_name": "West Virginia",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": ["physicians_special_requirements", "attorneys"],
  "key_restrictions": ["reasonableness_test"],
  "statutory_framework": "W. Va. Code § 47-11E-1 et seq. (physicians)"
}
```

---

## WISCONSIN

### 1. Enforceability Status
**Enforceable but with the strictest blue pencil rule alongside Nebraska.** Wis. Stat. § 103.465 governs non-competes. The statute permits non-competes that are "reasonably necessary for the protection of the employer." Critically, Wisconsin follows a **strict "red pencil" (no reformation)** doctrine: if any provision of the non-compete is unreasonable, the ENTIRE covenant is void and unenforceable.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap**, but the red pencil doctrine means duration must be precisely reasonable. Two years is commonly cited as an outer boundary. Given the no-reformation rule, shorter is safer.

### 4. Geographic Scope Requirements
Must be reasonable. Given the red pencil doctrine, geographic overreach voids the entire agreement.

### 5. Consideration Requirements
**Employment generally suffices.** Wisconsin courts have accepted employment as adequate consideration.

### 6. Blue Pencil Doctrine
**STRICT VOID (Red Pencil).** This is Wisconsin's most critical feature. Wis. Stat. § 103.465 states that a covenant is lawful only if "the restrictions imposed are reasonably necessary for the protection of the employer." If ANY element (duration, geography, scope of activity) is unreasonable, the ENTIRE covenant is void. Courts will NOT reform, modify, narrow, or save the covenant.

Practical example: An employer includes a 3-year duration when 2 years would be reasonable. The entire non-compete is void. Not just the extra year; the entire agreement. The court will not reduce 3 years to 2. This makes Wisconsin one of the most dangerous jurisdictions for employers who draft aggressively.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**No broad statutory exemptions.** Attorneys are subject to professional conduct rules.

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes. The strict doctrine has been stable for decades.

### 10. Key Case Law
**Star Direct, Inc. v. Dal Pra, 319 Wis. 2d 34 (2009)**: Key Wisconsin Supreme Court case reaffirming the strict no-reformation rule. The court voided an overbroad non-compete entirely, declining to narrow the restriction.

**Rollins Burdick Hunter of Wisconsin, Inc. v. Hamilton, 101 Wis. 2d 460 (1981)**: Earlier case establishing the statutory framework and the strict approach. The court held that § 103.465 means what it says: unreasonable restrictions are void, period.

```json
{
  "jurisdiction": "WI",
  "jurisdiction_name": "Wisconsin",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "strict_void",
  "blue_pencil_critical": true,
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": ["attorneys"],
  "key_restrictions": ["red_pencil_no_reformation", "must_be_precisely_drafted", "necessary_for_employer_protection"],
  "statutory_framework": "Wis. Stat. § 103.465",
  "drafting_note": "CRITICAL: Every element must be independently reasonable. Any unreasonable element voids the ENTIRE agreement."
}
```

---

## WYOMING

### 1. Enforceability Status
**Generally enforceable.** Wyoming applies a common law reasonableness test. Non-competes must be reasonable in scope, duration, and geographic area.

### 2. Salary/Income Thresholds
**None.**

### 3. Maximum Duration
**No statutory cap.** Courts evaluate reasonableness. One to two years is the standard range.

### 4. Geographic Scope Requirements
Must be reasonable. Given Wyoming's geography and sparse population, courts analyze geographic scope in context.

### 5. Consideration Requirements
**Continued employment generally suffices.** Wyoming follows the majority approach.

### 6. Blue Pencil Doctrine
**Reformation.** Wyoming courts will modify overbroad provisions.

### 7. Required Notice Periods
**None.**

### 8. Specific Exemptions
**No broad statutory exemptions.**

### 9. Recent Legislative Changes (2023-2026)
No significant legislative changes.

### 10. Key Case Law
**Hopper v. All Pet Animal Clinic, Inc., 861 P.2d 531 (Wyo. 1993)**: Landmark Wyoming case and one of the most frequently cited non-compete cases nationally. The Wyoming Supreme Court articulated a comprehensive analytical framework for evaluating non-competes, including the consideration requirement, the three-factor reasonableness test, and the reformation doctrine. This case is frequently cited by courts in other jurisdictions.

```json
{
  "jurisdiction": "WY",
  "jurisdiction_name": "Wyoming",
  "enforceability": "generally_enforceable",
  "salary_threshold": null,
  "salary_threshold_type": null,
  "max_duration_months": null,
  "max_duration_presumptive_months": 24,
  "blue_pencil": "reformation",
  "notice_required_days": null,
  "garden_leave_required": false,
  "consideration_posthire": "continued_employment",
  "independent_consideration_recommended": false,
  "exemptions": ["attorneys"],
  "key_restrictions": ["reasonableness_test"],
  "statutory_framework": null
}
```

---

# PART II: STRUCTURAL COMPONENTS OF A LEGALLY ENFORCEABLE NON-COMPETE AGREEMENT

This section provides expert drafting guidance for creating non-compete agreements that maximize enforceability across jurisdictions while complying with the diverse requirements documented in Part I.

---

## 1. ESSENTIAL CLAUSES AND PRECISE WORDING

### A. Identification of Parties
```
PARTIES: This Non-Competition Agreement ("Agreement") is entered into by and 
between [EMPLOYER LEGAL NAME], a [STATE] [entity type] ("Company"), and 
[EMPLOYEE FULL LEGAL NAME] ("Employee"), effective as of [DATE] ("Effective Date").
```

**Drafting note**: Always use full legal names. For multi-entity employers, specify which entity is the contracting party. Include the state of organization.

### B. Recitals / Whereas Clauses
```
WHEREAS, Company desires to employ Employee [or: continue to employ Employee] 
in the position of [TITLE], with access to Company's [trade secrets / confidential 
information / customer relationships / proprietary methodologies] (the "Protectable 
Interests");

WHEREAS, Employee acknowledges that during employment, Employee will have 
access to and become familiar with the Protectable Interests;

WHEREAS, Company and Employee desire to protect the Protectable Interests 
through this Agreement;
```

**Drafting note**: The recitals should specifically identify the protectable interests. This is critical in Texas (ancillary-to-enforceable-agreement requirement) and in all states requiring a "legitimate business interest." Generic recitals ("employee has access to confidential information") are weaker than specific ones ("employee will have access to the Company's customer database containing pricing, purchase history, and renewal dates for approximately 3,200 accounts").

### C. Definitions Section
```
"Competing Business" means any person, entity, or enterprise that [see Section 2 below].

"Restricted Territory" means [specific geographic description].

"Restricted Period" means the period beginning on the date of Employee's 
termination of employment (for any reason) and ending [X] months thereafter.

"Confidential Information" means [specific definition, with examples and exclusions].

"Customer" means any person or entity that (a) purchased products or services from 
Company during the [12/24]-month period immediately preceding Employee's 
termination, or (b) was actively solicited by Company during such period, and with 
whom Employee had material contact or for whom Employee performed services.
```

### D. Non-Competition Covenant (Core Restriction)
```
During the Restricted Period and within the Restricted Territory, Employee shall not, 
directly or indirectly, as an employee, employer, consultant, agent, principal, partner, 
stockholder (other than a passive holder of less than [2]% of the outstanding shares 
of a publicly traded company), officer, director, or in any other individual or 
representative capacity, engage in, render services to, or assist any Competing 
Business in [specific restricted activities tied to Employee's role].
```

**Critical drafting notes**:
- Restrict the **specific activities** the employee performed, not all activities of a competitor
- Include the passive investment carve-out (standard: 1-5% of publicly traded companies)
- Tie the restriction to the employee's actual role and responsibilities
- In red pencil states (NE, WI, VA), every element must be independently defensible

### E. Consideration Clause
```
In consideration for the obligations set forth in this Agreement, and in addition to 
[Employee's employment with Company / the following specific consideration]:

[Choose jurisdiction-appropriate option]:

(a) [AT-HIRE]: Company's offer of employment to Employee, including but not limited 
to the compensation, benefits, and access to Confidential Information described herein;

(b) [POST-HIRE WITH INDEPENDENT CONSIDERATION]: Company shall provide 
Employee with [specific consideration: signing bonus of $X / salary increase of $X / 
promotion to [TITLE] / [other specific benefit]], receipt of which is hereby acknowledged;

(c) [POST-HIRE WITH GARDEN LEAVE (Massachusetts/Washington)]: During the 
Restricted Period, Company shall pay Employee [50]% of Employee's highest 
annualized base salary during the [2]-year period preceding termination, payable in 
[regular installment schedule], subject to Employee's compliance with this Agreement;
```

### F. Term and Duration
```
This Agreement shall be effective as of the Effective Date and the non-competition 
obligations shall survive termination of employment for a period of [X] months 
following the date of termination (the "Restricted Period"), regardless of the reason 
for termination.

[JURISDICTION-SPECIFIC CLAUSE FOR STATES WITH STATUTORY CAPS]:
Notwithstanding the foregoing, in the event that the Restricted Period exceeds the 
maximum period permitted by applicable law, the Restricted Period shall be 
automatically reduced to the maximum period permitted.
```

### G. Geographic Scope
```
The restrictions in this Agreement shall apply within the following geographic area 
(the "Restricted Territory"):

[Choose jurisdiction-appropriate format]:

(a) [SPECIFIC GEOGRAPHY]: Within a [X]-mile radius of [Company's headquarters / 
Employee's primary office location / each Company office at which Employee worked];

(b) [NAMED TERRITORIES]: Within the following states/counties/parishes: [list];

(c) [CUSTOMER-BASED]: With respect to any Customer with whom Employee had 
material contact during the [12/24]-month period preceding termination;

(d) [LOUISIANA SPECIFIC]: Within the following parishes: [list each parish by name];
```

---

## 2. BEST PRACTICES FOR DEFINING "COMPETING BUSINESS"

The definition of "Competing Business" is frequently the element that causes enforceability problems. Overbroad definitions (e.g., "any business in the technology industry") are the most common reason courts refuse enforcement.

### Tiered Approach (Recommended)
```
"Competing Business" means any person, entity, or enterprise that:

(a) [NARROW TIER]: develops, manufactures, sells, or distributes [specific product 
category] that is substantially similar to the products or services offered by Company 
as of the date of Employee's termination; OR

(b) [MEDIUM TIER]: provides [specific service category] to the same customer 
segments served by Company in the Restricted Territory.
```

### Principles:
1. **Name the products/services specifically.** "Enterprise resource planning software for manufacturing companies" is enforceable. "Software" is not.
2. **Reference the competitive overlap.** The restriction should capture businesses that actually compete with the employer, not the entire industry.
3. **Use "substantially similar" language** to prevent trivial distinctions from undermining the restriction.
4. **In red pencil states**: Use a single, conservative definition. Do not include a broader fallback tier because if the broader tier is unreasonable, the entire definition fails.
5. **Consider an exhibit.** Attach a list of known competitors as Exhibit A, with language that the list is "illustrative and not exhaustive."

---

## 3. DOCUMENTING AND EVIDENCING CONSIDERATION

### At-Hire Agreements
- The employment offer letter should reference the non-compete and make acceptance contingent on signing
- Include a recital: "Employee acknowledges that the offer of employment and the compensation, benefits, and access to Confidential Information set forth herein constitute adequate consideration for this Agreement"
- In states requiring advance notice (CO, IL, ME, OR, WA), document the date of first disclosure

### Post-Hire Agreements
- **Provide tangible independent consideration** in ALL jurisdictions, even those where continued employment may suffice. This is the single most cost-effective risk mitigation step.
- Document the consideration in the agreement itself:
  ```
  In consideration for this Agreement, Company hereby provides Employee with:
  (a) A one-time payment of $[X], payable within [30] days of execution; AND/OR
  (b) An increase in Employee's annual base salary from $[X] to $[Y], effective [date]; AND/OR
  (c) A promotion to the position of [TITLE], effective [date]; AND/OR
  (d) Access to [specific Confidential Information or trade secrets].
  
  Employee acknowledges receipt of the foregoing consideration and agrees that it 
  constitutes fair and adequate independent consideration for the obligations set 
  forth herein.
  ```
- **Illinois specific**: If relying on continued employment, document the date of signing and track the 2-year minimum. Set a calendar reminder.
- **Massachusetts specific**: Include the garden-leave provision or document the mutually agreed alternative consideration.

### Evidence Preservation
- Retain a signed copy of the agreement (original signatures preferred; electronic signatures acceptable in all states)
- Document the date and method of delivery (email receipt, delivery confirmation, witnessed hand-delivery)
- In states requiring advance notice, document compliance (e.g., "Agreement delivered to Employee on [date], [X] days before [first day of employment/effective date]")

---

## 4. SEVERABILITY LANGUAGE AND INTERACTION WITH STATE BLUE PENCIL RULES

### Standard Severability Clause
```
SEVERABILITY: If any provision of this Agreement, or any part thereof, is held to be 
invalid, illegal, or unenforceable by a court of competent jurisdiction, such invalidity, 
illegality, or unenforceability shall not affect any other provision of this Agreement, 
which shall remain in full force and effect. In the event that any restriction contained 
in this Agreement is found to be unreasonable or overbroad as to scope, duration, 
or geographic area, the parties agree that such restriction shall be modified and 
enforced to the maximum extent permitted by applicable law.
```

### Interaction with Red Pencil States (NE, WI, VA)
**Critical**: In Nebraska, Wisconsin, and Virginia (trend), severability clauses do NOT save overbroad restrictions. The court will void the entire covenant regardless of the severability clause. The severability clause may preserve the remainder of the employment agreement (e.g., the NDA and non-solicitation provisions), but it will NOT cause the court to reform the non-compete itself.

**Strategy for red pencil states**: Draft conservative restrictions from the outset. Use a "step-down" or "tiered" approach:
```
[RED PENCIL STATE VARIANT]:
The Restricted Period shall be [12] months. In the event a court determines that 
[12] months is unreasonable, this provision shall be deemed to provide for a 
Restricted Period of [6] months. In the event a court determines that [6] months is 
unreasonable, this provision shall be deemed to provide for a Restricted Period of 
[3] months.
```
Note: Some courts in red pencil states have rejected step-down provisions as an attempt to circumvent the no-reformation rule. This approach is not guaranteed to work, but it is better than a single overbroad duration. Consult local counsel.

### Reformation Authorization Clause (for blue pencil states)
```
[BLUE PENCIL STATE VARIANT]:
REFORMATION: In the event that a court of competent jurisdiction determines that 
any restriction contained in this Agreement is unreasonable or overbroad as to scope, 
duration, or geographic area, the parties hereby agree and request that such court 
modify the restriction to the minimum extent necessary to render it reasonable and 
enforceable, and enforce the restriction as so modified. The parties expressly 
authorize and request such judicial reformation.
```

---

## 5. STANDALONE AGREEMENT VS. INTEGRATION WITH NDA/OTHER COVENANTS

### Standalone Agreement (Recommended)
**Advantages**:
- Clearer consideration analysis (each agreement's consideration is independently evaluated)
- In red pencil states, an overbroad non-compete does not void the NDA
- Easier to tailor to jurisdiction-specific requirements
- Cleaner for litigation (the court analyzes only the non-compete, not a multi-covenant document)

### Integrated Agreement
**Advantages**:
- Single document for the employee to review and sign
- Cross-referencing between provisions (e.g., the non-compete references the NDA's definition of Confidential Information)
- May be administratively simpler

**Recommended approach**: Use a master **Restrictive Covenant Agreement** that contains the non-compete, non-solicitation, and NDA as **separate, labeled sections with independent severability provisions**. This preserves the administrative simplicity of a single document while protecting each covenant from the invalidity of another.

```
INDEPENDENT COVENANTS: The non-competition, non-solicitation, and 
non-disclosure covenants set forth in Sections [X], [Y], and [Z], respectively, are 
independent covenants. The invalidity or unenforceability of any one covenant shall 
not affect the validity or enforceability of any other covenant. Each covenant is 
supported by independent and adequate consideration.
```

---

## 6. GARDEN-LEAVE PROVISIONS AND THEIR EFFECT ON ENFORCEABILITY

### What Garden Leave Is
A garden-leave provision requires the employer to continue paying the employee during the restricted period, typically at a percentage of the employee's base salary. The employee is "on leave" during this period (i.e., not working but still receiving compensation).

### Where Garden Leave Is Required
- **Massachusetts**: Required. Minimum 50% of highest base salary in last 2 years (or mutually agreed alternative consideration). G.L. c. 149, § 24L.
- **Washington**: Required if employee is laid off or terminated without cause. Must pay base salary during restricted period. RCW § 49.62.
- **Nevada**: Required if employee is terminated without cause. NRS § 613.195.

### Where Garden Leave Is Strongly Recommended (Not Required)
- **All other states**: Garden leave significantly increases the likelihood of enforcement because it (a) provides clear independent consideration, (b) demonstrates the employer's genuine interest in the restriction (not just a punitive covenant), and (c) reduces the hardship on the employee (a key factor in the reasonableness analysis).

### Drafting Template
```
GARDEN LEAVE: During the Restricted Period, Company shall pay Employee an 
amount equal to [50/75/100]% of Employee's [highest annualized base salary during 
the [2]-year period preceding termination / base salary at the time of termination], 
payable in accordance with Company's regular payroll schedule, less applicable 
withholdings and deductions (the "Garden Leave Payments").

MITIGATION: Garden Leave Payments shall be [reduced / not reduced] by any 
earnings Employee receives from subsequent employment during the Restricted Period.

CESSATION: Company may, at its election, cease making Garden Leave Payments at 
any time, in which case the restrictions in Section [X] shall terminate simultaneously 
upon the cessation of Garden Leave Payments.
```

**The cessation clause is critical**: It gives the employer an off-ramp. If the employer decides not to enforce, it stops paying and the restriction ends. This is standard practice and is viewed favorably by courts.

---

## 7. KEY DIFFERENCES: EMPLOYEE VS. INDEPENDENT CONTRACTOR NON-COMPETES

### Legal Treatment Differences

| Factor | Employee | Independent Contractor |
|--------|----------|----------------------|
| **Enforceability threshold** | Standard reasonableness in most states | Higher scrutiny in many states; some states (e.g., WA) have separate higher thresholds |
| **Consideration** | Employment is typically sufficient at hire | The independent contractor agreement itself must provide consideration; the work arrangement alone may not suffice |
| **Duration tolerance** | 1-2 years typical | Courts may apply shorter durations given the more arms-length nature of the relationship |
| **Public policy** | Balanced against legitimate interests | Stronger public policy against restricting independent contractors, who bear their own business risk |
| **Washington** | $116,593 threshold | $291,483 threshold (2.5x higher) |
| **Statutory coverage** | Most state statutes explicitly cover employees | Some statutes do not cover independent contractors (e.g., Oregon ORS § 653.295 focuses on employees) |

### Drafting Considerations for Independent Contractors
1. **Ensure correct classification.** Misclassification as an independent contractor when the worker is actually an employee may void the entire agreement and expose the employer to penalties.
2. **Provide explicit consideration.** The contractor relationship itself may not suffice; include specific payments or access to information as consideration.
3. **Use narrower restrictions.** Courts are less sympathetic to restricting independent contractors. Shorter durations and narrower scopes are essential.
4. **Include an integration clause.** The non-compete should be part of the independent contractor agreement, with the statement that the work arrangement and the non-compete are mutually dependent.

---

## 8. STRATEGIC INTERPLAY: NON-COMPETE, NON-SOLICITATION, AND NDA

### The Three-Layer Protection Model

These three restrictive covenants serve different purposes and have different enforceability profiles:

| Covenant | What It Protects | Enforceability | Use When |
|----------|-----------------|---------------|----------|
| **Non-Compete** | Market position; prevents direct competition | Most restrictive; most scrutinized; banned in several states | Employee has broad knowledge of competitive strategy, trade secrets, or deep customer relationships |
| **Non-Solicitation** | Customer and employee relationships | More readily enforced than non-competes; permitted in most states that ban non-competes (including OK, and often in CA for trade secret-based restrictions) | Employee has significant customer or employee relationships that could be diverted |
| **NDA** | Confidential information and trade secrets | Most broadly enforced; permitted in essentially all jurisdictions | Employee has access to any proprietary information |

### Strategic Layering
```
IF jurisdiction = "CA" OR "MN" OR "ND" OR "OK":
    USE: NDA + Non-Solicitation only (non-compete void)
    
ELIF jurisdiction blue_pencil = "strict_void":
    USE: NDA + Non-Solicitation + conservatively-drafted Non-Compete (separate documents)
    
ELIF jurisdiction enforceability = "banned_conditional" AND employee_salary < threshold:
    USE: NDA + Non-Solicitation only
    
ELIF jurisdiction enforceability = "enforceable_restricted" OR "generally_enforceable":
    USE: NDA + Non-Solicitation + Non-Compete (can be integrated with severability)
```

### Practical Guidance
1. **Always include an NDA.** There is no jurisdiction that prohibits NDAs (with the exception of overbroad NDAs that function as non-competes in practice). The NDA is the baseline protection.

2. **Include non-solicitation in all jurisdictions.** Non-solicitation agreements are enforceable in nearly all states, including most that ban non-competes. In Oklahoma, non-solicitation of "established customers" is explicitly permitted by statute.

3. **Use non-competes selectively.** Non-competes should be reserved for employees who genuinely have access to competitively sensitive information or relationships that cannot be adequately protected by NDAs and non-solicitation alone. Applying non-competes to all employees wastes resources, creates ill will, and (in states with penalty provisions) may expose the employer to liability.

4. **Draft each covenant to stand independently.** If the non-compete is struck down, the non-solicitation and NDA should survive. Use independent severability language.

5. **Match the restriction to the risk.** A senior executive with access to multi-year strategic plans warrants a broader restriction than a mid-level manager. A salesperson with direct customer relationships needs non-solicitation more than a non-compete. A software engineer with access to proprietary code needs an NDA more than either.

6. **Consider forfeiture provisions as an alternative.** In some jurisdictions (see *Brown & Brown v. Johnson* in New York), forfeiture-for-competition provisions (the employee forfeits deferred compensation if they compete) are analyzed under a less stringent standard than traditional non-competes because they do not prevent the employee from working. This can be an effective alternative in jurisdictions hostile to non-competes.

---

## APPENDIX: QUICK-REFERENCE CLASSIFICATION TABLE

| Jurisdiction | Status | Threshold | Max Duration | Blue Pencil | Notice | Garden Leave |
|---|---|---|---|---|---|---|
| AL | Enforceable | None | None (2yr typical) | Reformation | None | No |
| AK | Enforceable | None | None (2yr typical) | Reformation | None | No |
| AZ | Enforceable | None | None (2yr typical) | Reformation | None | No |
| AR | Enforceable | None | None (2yr typical) | Reformation | None | No |
| **CA** | **BANNED** | N/A | N/A | N/A | Notify void | No |
| CO | Conditional | ~$112K+ | None (2yr typical) | Reformation | 14 days | No |
| CT | Enforceable | None | None (2yr typical) | Reformation | None | No |
| DE | Enforceable | None | None (2yr typical) | Reformation | None | No |
| **DC** | **Near-ban** | ~$150K+ | 12 mo | N/A | 14 days | No |
| FL | Enforceable (pro-employer) | None | 2yr presumptive | Mandatory reform | None | No |
| GA | Restricted | None | None (2yr typical) | Reformation | None | No |
| HI | Restricted (tech ban) | None | None (2yr typical) | Reformation | None | No |
| ID | Enforceable | None | 18mo presumptive | Reformation | None | No |
| IL | Conditional | $75K+ | None (2yr typical) | Reformation | 14 biz days | No |
| IN | Enforceable | None | None (2yr typical) | Reformation | None | No |
| IA | Enforceable | None | None (2yr typical) | Hybrid | None | No |
| KS | Enforceable | None | None (2yr typical) | Reformation | None | No |
| KY | Enforceable | None | None (2yr typical) | Hybrid | None | No |
| LA | Restricted | None | 24mo cap | Strict void | None | No |
| ME | Restricted | ~$62K+ (400% FPL) | None (2yr typical) | Reformation | 3 biz days | No |
| MD | Restricted | $31.2K+ / $15hr+ | None (2yr typical) | Reformation | None | No |
| MA | Restricted | FLSA exempt only | 12mo cap | Reformation | Yes (50% salary) | **Yes** |
| MI | Enforceable | None | None (3yr possible) | Reformation (statutory) | None | No |
| **MN** | **BANNED** | N/A | N/A | N/A | N/A | No |
| MS | Enforceable | None | None (2yr typical) | Reformation | None | No |
| MO | Enforceable | None | None (2yr typical) | Hybrid | None | No |
| MT | Enforceable | None | None (2yr typical) | Reformation | None | No |
| **NE** | Enforceable | None | None (3yr possible) | **STRICT VOID** | None | No |
| NV | Restricted | None | None (2yr typical) | Mandatory reform | None | If terminated |
| NH | Restricted | ~$14.50hr (200% FMW) | None (2yr typical) | Reformation | Before acceptance | No |
| NJ | Enforceable | None | None (2yr typical) | Reformation | None | No |
| NM | Enforceable | None | None (2yr typical) | Reformation | None | No |
| NY | Enforceable | None | None (1yr typical) | Reformation | None | No |
| NC | Enforceable | None | None (2yr typical) | Strict blue pencil | None | No |
| **ND** | **BANNED** | N/A | N/A | N/A | N/A | No |
| OH | Enforceable | None | None (2yr typical) | Reformation | None | No |
| **OK** | **BANNED** | N/A | N/A | N/A | N/A | No |
| OR | Restricted | ~$100K+ | 12mo cap | Reformation | 2 weeks | No |
| PA | Enforceable | None | None (2yr typical) | Reformation | None | No |
| RI | Restricted | FLSA exempt only | 12mo cap | Reformation | None | No |
| SC | Enforceable | None | None (2yr typical) | Reformation | None | No |
| SD | Enforceable | None | None (2yr typical) | Reformation | None | No |
| TN | Enforceable | None | None (2yr typical) | Reformation | None | No |
| TX | Enforceable | None | None (2yr typical) | Mandatory reform | None | No |
| UT | Restricted | None | 12mo cap | Reformation | None | No |
| VT | Enforceable | None | None (2yr typical) | Reformation | None | No |
| **VA** | Restricted | ~$70K+ / no hourly | None (1yr typical) | **Strict void trend** | None | No |
| WA | Restricted | ~$117K+ emp / ~$291K+ IC | 18mo cap | Reform w/penalty | At acceptance | If terminated |
| WV | Enforceable | None | None (2yr typical) | Reformation | None | No |
| **WI** | Enforceable | None | None (2yr typical) | **STRICT VOID** | None | No |
| WY | Enforceable | None | None (2yr typical) | Reformation | None | No |

---

## APPENDIX: CONDITIONAL LOGIC SUMMARY FOR CONTRACT GENERATION

```json
{
  "decision_tree": {
    "step_1_jurisdiction_check": {
      "if_banned": ["CA", "MN", "ND", "OK"],
      "action": "DO_NOT_GENERATE_NONCOMPETE",
      "alternative": "Generate NDA + Non-Solicitation only"
    },
    "step_2_threshold_check": {
      "jurisdictions_with_thresholds": {
        "CO": {"type": "annual", "minimum": 112500, "indexed": true},
        "DC": {"type": "annual", "minimum": 150000, "note": "highly_compensated_only"},
        "IL": {"type": "annual", "minimum": 75000, "indexed": true},
        "ME": {"type": "annual", "minimum": 62400, "basis": "400pct_fpl"},
        "MD": {"type": "annual", "minimum": 31200, "hourly_minimum": 15},
        "NH": {"type": "hourly", "maximum": 14.50, "basis": "200pct_fmw"},
        "OR": {"type": "annual", "minimum": 100533, "basis": "median_family_income"},
        "VA": {"type": "annual", "minimum": 69836, "hourly_banned": true},
        "WA": {"type": "annual", "minimum_employee": 116593, "minimum_contractor": 291483, "indexed": true}
      },
      "if_below_threshold": "DO_NOT_GENERATE_NONCOMPETE",
      "if_above_threshold": "PROCEED_TO_STEP_3"
    },
    "step_3_exemption_check": {
      "flsa_nonexempt_banned": ["MA", "NH", "RI"],
      "technology_workers_banned": ["HI"],
      "broadcast_employees_banned": ["KY", "NY", "UT"],
      "if_exemption_applies": "DO_NOT_GENERATE_NONCOMPETE"
    },
    "step_4_duration_cap": {
      "12_month_cap": ["MA", "OR", "RI", "UT"],
      "18_month_cap": ["WA"],
      "24_month_cap": ["LA"],
      "no_cap_but_presumptive": {
        "18_months": ["ID"],
        "24_months": ["FL"]
      },
      "action": "SET_DURATION_TO_MIN(requested_duration, jurisdictional_cap)"
    },
    "step_5_blue_pencil": {
      "strict_void_states": ["NE", "WI", "LA"],
      "strict_void_trend": ["VA"],
      "strict_blue_pencil": ["NC"],
      "if_strict_void": "USE_CONSERVATIVE_DRAFTING_TEMPLATE",
      "if_reformation": "USE_STANDARD_TEMPLATE_WITH_REFORMATION_CLAUSE"
    },
    "step_6_notice_requirements": {
      "CO": {"days": 14, "before": "effective_date_or_start"},
      "IL": {"days": 14, "type": "business_days", "attorney_notice": true},
      "ME": {"days": 3, "type": "business_days", "before": "first_day"},
      "MA": {"days": 10, "type": "business_days"},
      "OR": {"days": 14, "before": "first_day"},
      "WA": {"before": "offer_acceptance"},
      "action": "INCLUDE_NOTICE_COMPLIANCE_IN_DELIVERY_WORKFLOW"
    },
    "step_7_consideration": {
      "garden_leave_required": ["MA"],
      "garden_leave_if_terminated": ["NV", "WA"],
      "independent_consideration_required_posthire": ["IL", "MO", "NJ", "PA"],
      "continued_employment_sufficient": ["AL", "FL", "GA", "IN", "KS", "MI", "MS", "OH", "SC", "SD", "TX"],
      "action": "SELECT_CONSIDERATION_TEMPLATE_FOR_JURISDICTION"
    },
    "step_8_geographic_requirements": {
      "LA": "MUST_SPECIFY_PARISHES_BY_NAME",
      "all_others": "APPLY_REASONABLENESS_TEST"
    }
  }
}
```

---

*Document generated for informational purposes. All salary thresholds marked as "estimated" should be verified against current state publications. Statutory citations are accurate as of early 2025; verify for any intervening amendments. This analysis does not constitute legal advice. Retain qualified employment counsel in each relevant jurisdiction before implementing non-compete agreements.*
