export default function Header() {
  return (
    <div className="header-div">
      <h1 className="text-4xl font-bold mb-5 mt-2 text-center flex">
      To <span className="span">‑Do-</span>List <img className="h-10 w-10 ml-5" src="/images/to-do-list.svg" alt="icon" />
      </h1>

          <div className="social-icons">
          <a href="#"><i class="fab fa-linkedin fa-2x p-4"></i></a>
          <a href="#"><i class="fab fa-github fa-2x p-4"></i></a>
          <a href="#"><i class="fab fa-instagram fa-2x p-4"></i></a>
          <a href="#"><i class="fab fa-twitter fa-2x p-4"></i></a>
          </div>
          
      </div>
      
    
    
  )
}
