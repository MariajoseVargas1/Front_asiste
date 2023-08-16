import { useForm } from "react-hook-form";

const Formulario_log =() => {

    const{register, handleSubmit}= useForm();
    return <div classcontainer="container"><div class="card">
        <div class="logos">
        <image class="logo-horizontal" id="web-asiste" src="../resources/images/_logo_asiste_horizontal.png" alt="Logo de asiste con letras horizontales" />
        <image class="logo-verde" id="web-sena" src="../resources/images/_logo_sena_verde.png" salt="Logo del SENA verde" style="max-width: 8rem;"/>
        </div>
                            
        <h1 class="text-center texto">INGRESO DE USUARIOS REGISTRADOS</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Número de documento</label>
            <input type="text"  placeholder="Ingrese número de documento" {...register('document', {required: true})}/>
            {appendErrors.document?.type === 'required' && <p>Este campo es requerido</p>}


            <label>Contraseña</label>
            <input type="password" name="password" placeholder="Ingrese número contraseña" {...register('password',{required: true})}/>
            {appendErrors.password?.type === 'required' && <p>Este campo es requerido</p>}


            <div class="button" />
                    <button class="butt" id="butt">Iniciar</button>


        </form>
        <div class="olvido">
                                <a href="../forgot/forgot.html">Olvide mi contraseña</a>
                            </div>
    </div>
    </div>
    
}

export default Formulario_log;