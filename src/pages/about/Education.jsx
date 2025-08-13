import { Card, List } from 'antd'

const Education = ({ education }) => (
  <Card title="Education" style={{ marginBottom: 16 }}>
    <List
      dataSource={education}
      renderItem={(item) => (
        <List.Item>
          <h3>{item.degree}</h3>
          <p>{item.institution}</p>
          <p><strong>{item.duration}</strong></p>
        </List.Item>
      )}
    />
  </Card>
)

export default Education
