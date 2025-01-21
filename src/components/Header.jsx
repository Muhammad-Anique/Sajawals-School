export default function Header({ title, info }) {
  return <header>
    <h1 style={{color:'#F25C05',fontSize:'25px',fontWeight:'600'}}>{title}</h1>
    <h4>{info}</h4>
  </header>
}