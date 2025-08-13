import { Layout } from 'antd'
import Header from './about/Header'
import Test from './about/Test'
import Experience from './about/Experience'
import Education from './about/Education'
import Skills from './about/Skills'

import { profile, experiences, education, skills } from './data/about'

const { Content, Footer } = Layout

function About() {
  return (
    <div style={{ maxHeight: 1000, overflowY: 'auto' }}>
        <Layout style={{ minHeight: '100vh', background: '#f9f9f9' }}>
        <Header name={profile.name} title={profile.title} />
        <Content style={{ padding: '0 50px', marginTop: 20 }}>
                <Test profile={profile}  />
                <Experience experiences={experiences} />
                <Education education={education} />
                <Skills skills={skills} />
        
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2025</Footer>
        </Layout>
     </div>
  )
}

export default About