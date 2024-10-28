import '../index.css';

function Header() {
  return (
    <div className='Header'>
       <ul>
        <li className='profilePic'><img src='' alt='me'/></li>
        <li>Home</li> 
        <li>Projects</li>
        <li>Skills</li>
        <li className='language'>English</li>
       </ul>
    </div>
  );
}

export default Header;
