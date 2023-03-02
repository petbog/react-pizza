import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={335}
    height={560}
    viewBox="0 0 335 560"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="162" cy="146" r="117" /> 
    <circle cx="128" cy="174" r="2" /> 
    <rect x="32" y=



"300" rx="8" ry=







"8" width="267" height="40" /> 
    <rect x="3" y=

"478" rx="5" ry=

"5" width="124" height="31" /> 
    <rect x="136" y=

"470" rx="14" ry=

"14" width="184" height="69" /> 
    <rect x="178" y=





"388" rx="0" ry=













"0" width="0" height="50" /> 
    <rect x="3" y=



"361" rx="3" ry=







"3" width="332" height="88" />
  </ContentLoader>
)

export default Skeleton