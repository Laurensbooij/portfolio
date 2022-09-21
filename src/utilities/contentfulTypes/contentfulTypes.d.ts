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
  readonly sectionTitle: string
  readonly subtitle: string
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
  readonly sectionTitle: string
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