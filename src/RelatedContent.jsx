import './RelatedContent.css'

export default function RelatedContent({title='Related learning',items=[]}){
  const available=items.filter((item)=>item?.href&&item.label)
  if(!available.length)return null
  return <section className="contextual-links"><h2>{title}</h2><ul>{available.map((item)=><li key={item.href}><a href={item.href}>{item.label}</a>{item.description&&<small>{item.description}</small>}</li>)}</ul></section>
}
