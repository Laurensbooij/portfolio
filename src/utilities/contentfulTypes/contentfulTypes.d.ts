import { Entry, Asset } from 'contentful'

export interface aboutMeDataProps {
  //About me
  /*  */
  readonly ambitionsContent: { content: any, data: any, nodeType: string }
  readonly ambitionsIcon: Asset
  readonly ambitionsTitle: string
  readonly name: string
  readonly personalIntroduction: { content: any, data: any, nodeType: string }
  readonly personalPhoto: Asset
  readonly personalValuesContent: { content: any, data: any, nodeType: string }
  readonly personalValuesIcon: Asset
  readonly personalValuesTitle: string
  readonly subtitle: string
}

export interface bookListDataProps {
  //Book list
  /* Books I've read */
  readonly authors: string
  readonly coverImage: Asset
  readonly keyTakeaways?: ReadonlyArray<string>
  readonly summary: string
  readonly title: string
}

export interface educationExperienceDataProps {
  //Education experience
  /*  */
  readonly achievementHighlight?: string
  readonly dateRange: string
  readonly educationDescription?: { content: any, data: any, nodeType: string }
  readonly educationSubtitle?: string
  readonly educationTitle: string
  readonly order: number
}

export interface jobRoleDataProps {
  //Job role
  /*  */
  readonly description?: { content: any, data: any, nodeType: string }
  readonly subtitle?: string
  readonly title: string
}

export interface portfolioCaseDataProps {
  //Portfolio case
  /* A case in my portfolio. */
  readonly caseCategories: ReadonlyArray<string>
  readonly caseContent: { content: any, data: any, nodeType: string }
  readonly casePreviewImage: Asset
  readonly caseSummary: string
  readonly detailPageSlug: string
  readonly order: number
  readonly subtitle: string
  readonly title: string
}

export interface skillDataProps {
  //Skill
  /* An instance of a skill, to be embedded in a Skillset */
  readonly skillLevel: number
  readonly skillName: string
  readonly subtitle?: string
}

export interface skillsetDataProps {
  //Skillset
  /*  */
  readonly order: number
  readonly skills: ReadonlyArray<Entry<Skill>>
  readonly subtitle?: string
  readonly title: string
}

export interface skillsetLegendDataProps {
  //Skillset Legend
  /*  */
  readonly legendLabel1: string
  readonly legendLabel2: string
  readonly legendLabel3: string
  readonly legendTitle: string
  readonly textContent: { content: any, data: any, nodeType: string }
}

export interface workExperienceDataProps {
  //Work experience
  /* An instance of a job or work experience to be displayed on your resume */
  readonly companyDescription?: string
  readonly companyLogo: Asset
  readonly companyName: string
  readonly cta?: Entry<WorkExperienceCta>
  readonly jobRoles: ReadonlyArray<Entry<JobRole>>
  readonly order: number
  readonly workDuration: string
  readonly workDurationPeriod: string
}

export interface workExperienceCtaDataProps {
  //Work experience CTA
  /*  */
  readonly buttonText: string
  readonly content?: { content: any, data: any, nodeType: string }
  readonly slug: string
}