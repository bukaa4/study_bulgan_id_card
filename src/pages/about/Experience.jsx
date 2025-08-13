import { Card, Timeline } from 'antd'

const Experience = ({ experiences }) => (
  <Card title="Experience" style={{ marginBottom: 16 }}>
    <Timeline>
      {experiences.map((item, index) => (
        <Timeline.Item key={index}>
          <h3>{item.role} @ {item.company}</h3>
          <p><strong>{item.duration}</strong></p>
          <p>{item.description}</p>
        </Timeline.Item>
      ))}
    </Timeline>
  </Card>
)

export default Experience
