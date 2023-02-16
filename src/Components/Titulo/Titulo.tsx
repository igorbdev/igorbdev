import './Titulo.css'

interface TituloProps{
    titulo: string;
}

export default function Slider({titulo}: TituloProps) {
    return (
        <div className="linhaComTexto">
          <span>{titulo}</span>
        </div>
    )
}