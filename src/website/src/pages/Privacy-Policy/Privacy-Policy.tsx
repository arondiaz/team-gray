import BgLayout from '../../shared/BgLayout';
import styles from './Privacy-Policy.module.scss';

export const PrivacyPolicy = () => {
	return (
		<>
			<div className={`${styles.pageContainer} ${styles.textStyle}`}>
				<p>
					En FastWork, nuestra prioridad es brindar una plataforma confiable y
					eficiente que conecte a los prestadores de servicios con los
					consumidores de una manera rápida y sencilla. Nuestro objetivo es
					facilitar la contratación de servicios como gasista, electricista,
					limpieza, entre otros, a través de nuestra página web.
				</p>
				<p>
					FastWork se presenta como un intermediario en la conexión entre
					prestadores de servicios y consumidores, ofreciendo una plataforma
					segura para ambas partes. Sin embargo, es importante destacar que
					FastWork no se hace responsable de los inconvenientes o problemas que
					puedan surgir entre el prestador de servicio y el consumidor.
				</p>

				<p>
					La responsabilidad de los servicios prestados recae completamente en
					el prestador y el consumidor. FastWork no controla ni supervisa
					directamente la calidad de los servicios ofrecidos, ya que no
					participa en la ejecución de los mismos. Nuestra función principal es
					facilitar el encuentro entre ambas partes y proporcionar un entorno
					seguro para que realicen sus acuerdos.
				</p>

				<p>
					Es responsabilidad del consumidor investigar, evaluar y seleccionar
					cuidadosamente al prestador de servicio que mejor se ajuste a sus
					necesidades. Asimismo, instamos a los prestadores de servicio a ser
					transparentes y precisos en la descripción de sus habilidades,
					experiencia y tarifas. Esto ayudará a los consumidores a tomar
					decisiones adecuadas y evitar malentendidos posteriores.
				</p>

				<p>
					FastWork se compromete a garantizar la privacidad y seguridad de la
					información personal de los usuarios registrados. Tomamos medidas para
					proteger los datos y asegurarnos de que solo sean utilizados con fines
					relacionados con el uso de la plataforma.
				</p>

				<p>
					En resumen, FastWork es una plataforma que busca simplificar la
					contratación de servicios conectando prestadores y consumidores de
					manera rápida y segura. Sin embargo, recordamos que FastWork no asume
					responsabilidad por los servicios prestados y los posibles
					inconvenientes que puedan surgir. Instamos a nuestros usuarios a
					actuar con prudencia y realizar las investigaciones necesarias antes
					de contratar un servicio.
				</p>

				<p>
					FastWork se esfuerza por mantener un ambiente confiable y seguro para
					nuestros usuarios, y estamos abiertos a recibir comentarios y
					sugerencias para mejorar constantemente nuestra plataforma y la
					experiencia de nuestros usuarios
				</p>
			</div>
			<BgLayout />
		</>
	);
};
