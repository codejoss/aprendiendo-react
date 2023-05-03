import { useState } from "react";

export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  // Cambia el texto del boton si sigo o no a la persona
  const text = isFollowing ? 'Siguiendo' : 'Seguir';

  // Cambia la clase del boton en caso de que siga o no a la persona
  const buttonClass = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

    const handleClick = () => {
      setIsFollowing(!isFollowing)
    }
  0
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="avatar user" />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClass} onClick={handleClick}>{text}</button>
      </aside>
    </article>
  )
}