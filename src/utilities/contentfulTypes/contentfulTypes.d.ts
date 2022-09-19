import { Entry, Asset } from 'contentful'

export interface aboutMeDataProps {
  //About me
  /*  */
  readonly ambitionsContent: { content: any, data: any, nodeType: string }
  readonly ambitionsIcon: Asset
  readonly ambitionsTitle: string
  readonly name: string
  readonly sectionTitle: string
  readonly personalIntroduction: { content: any, data: any, nodeType: string }
  readonly personalPhoto: Asset
  readonly personalValuesContent: { content: any, data: any, nodeType: string }
  readonly personalValuesIcon: Asset
  readonly personalValuesTitle: string
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

export interface workExperienceDataProps {
  //Work experience
  /* An instance of a job or work experience to be displayed on your resume */
  readonly companyDescription?: string
  readonly companyLogo: Asset
  readonly companyName: string
  readonly ctaButtonText?: string
  readonly ctaText?: { content: any, data: any, nodeType: string }
  readonly ctaUrl?: string
  readonly jobRole1: string
  readonly jobRole2?: string
  readonly jobRoleDescription1?: { content: any, data: any, nodeType: string }
  readonly jobRoleDescription2?: { content: any, data: any, nodeType: string }
  readonly jobRoleSubtitle1?: string
  readonly jobRoleSubtitle2?: string
  readonly order: number
  readonly workDuration: string
  readonly workDurationPeriod: string
}

