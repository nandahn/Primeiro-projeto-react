import github from '../assets/img/icons8-github.svg'
export function Footer(){

    return(
       <div>
        <footer className='flex'>
            <p className='flex gap-2 pt-5'>Coded By
                <img src={github} alt="" />
                <a href="#">Maria Fernanda Bonifácio</a>
            </p>
        </footer>
       </div>
    )
}