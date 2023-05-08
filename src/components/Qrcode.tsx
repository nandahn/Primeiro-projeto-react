import qrcode from '../assets/img/image-qr-code.png'

export function Qrcode(){
    return (
        <div className="max-w-[330px]"> 
            <div className="flex items-center justify-center bg-color-card p-5 rounded-t-lg">
                <img className="rounded"
                src={qrcode} alt="" />
            </div>

            <div className="flex items-center justify-center flex-col bg-color-card text-center rounded-b-lg ">
                <h1 className='text-text-title font-bold text-lg p-6'>
                    Improve your front-end skills by building projects
                </h1>
        
                <p className="text-center pb-5 text-sm w-64">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </div>
    )
}