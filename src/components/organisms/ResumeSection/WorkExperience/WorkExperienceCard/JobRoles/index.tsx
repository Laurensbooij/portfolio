import React, { FC } from 'react'

import { jobRoleDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import JobRoleDescription from './JobRoleDescription'

import { Container } from './styled'


const JobRoles: FC<any> = ({ jobRoles }) => {

  const indentJobroles = jobRoles.length > 1
  const JobRoleDescriptions = jobRoles.map((role: any) => (
    <JobRoleDescription 
      key={role.sys.id}
      title={role.fields.title}
      subtitle={role.fields.subtitle}
      description={role.fields.description}
      indented={indentJobroles}
    />
  ))

  return (
    <Container>
      {JobRoleDescriptions}
    </Container>
  )
}

export default JobRoles