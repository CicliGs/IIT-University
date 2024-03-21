export default function Post({title, text}) {
    return(
      <li>
        <p>
          <strong>{ title }</strong> { text }
          {console.log('post active')}
        </p>
      </li>
    )
  }
