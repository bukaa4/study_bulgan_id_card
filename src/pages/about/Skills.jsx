import { Card, Tag } from 'antd'

const Skills = ({ skills }) => (
  <Card title="Skills" style={{ marginBottom: 16 }}>
    {skills.map((skill, index) => (
      <Tag color="blue" key={index}>{skill}</Tag>
    ))}
  </Card>
)

export default Skills
