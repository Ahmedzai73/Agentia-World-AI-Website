import { TypeAnimation } from 'react-type-animation';



export default function TextAnimation() {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'Hello! I m your AI agent. How can I enhance your business today?',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'I can help optimize your workflows with neural networks.',
      1000,
      'Let me assist you with advanced data analytics.',
      1000,
      'Would you like to explore our AI integration solutions?',
      1000
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '1em', display: '' }}
    repeat={Infinity}
    cursor={false}
  />
  )
}
