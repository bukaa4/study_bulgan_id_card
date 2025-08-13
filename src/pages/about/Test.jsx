import { Card } from 'antd'

const Test = ({ profile }) => (
  <Card title={profile.title} style={{ marginBottom: 16 }}>
    <p>{profile.about}</p>
  </Card>
)

export default Test
