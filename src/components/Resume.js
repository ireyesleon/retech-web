import React from 'react';

const Resume = () => {
  return (
    <section className="container py-5">
      <h1 className="fw-bold text-center mb-5">Ética, Seguridad y Gobernanza de CliniIA</h1>

      {/* I. Ética */}
      <h2 className="fw-bold mt-4">I. Ética alineada con los valores organizacionales</h2>
      <p>
        Declaración de principios éticos de IA CliniIA: <br />
        “La inteligencia artificial de CliniIA está diseñada para empoderar, no reemplazar, al personal médico; 
        reducir brechas, no ampliarlas; y servir con humanidad, no con frialdad algorítmica.”
      </p>
      <p>
        CliniIA reconoce que los avances tecnológicos solo son éticos cuando benefician directamente a quienes más han sido excluidos del acceso a la salud. Nuestros principios éticos incluyen:
      </p>
      <ul>
        <li><strong>Equidad radical:</strong> Datos representativos de comunidades vulnerables.</li>
        <li><strong>Justicia algorítmica:</strong> Prevención de sesgos estructurales con métricas como Disparate Impact Ratio, Equalized Odds y Demographic Parity.</li>
        <li><strong>IA para la inclusión:</strong> Herramientas comprensibles y accesibles, offline y de bajo costo.</li>
        <li><strong>Diseño con las comunidades:</strong> Participación activa de usuarios en diseño y prueba.</li>
        <li><strong>Transparencia y consentimiento informado:</strong> Explicación clara del rol de la IA y uso de datos.</li>
      </ul>
      <blockquote>
        “En CliniIA, la ética no es un agregado técnico: es la brújula que guía cada decisión de desarrollo, cada línea de código y cada algoritmo que ponemos al servicio de la salud pública y la justicia social.”
      </blockquote>

      <h3 className="mt-3">Comité ético de IA</h3>
      <ul>
        <li>Composición mixta: médicos, tecnólogos, abogados, bioética y representantes de pacientes.</li>
        <li>Revisión de casos clínicos de alto impacto o uso sensible.</li>
        <li>Evaluación de sesgos, equidad, justicia algorítmica y uso responsable.</li>
      </ul>

      <h3 className="mt-3">Transparencia al paciente</h3>
      <ul>
        <li>Política de "AI disclosure": informar cuando un algoritmo interviene en el diagnóstico.</li>
        <li>Material educativo sobre el rol de la IA en los tratamientos.</li>
      </ul>

      <h3 className="mt-3">Rol del Data Ethicist</h3>
      <ul>
        <li>Supervisión de modelos para evitar consecuencias discriminatorias.</li>
        <li>Reportes éticos semestrales sobre uso de datos y resultados.</li>
      </ul>

      <h3 className="mt-3">Indicadores éticos</h3>
      <ul>
        <li>Creación de matriz de indicadores: reducción tiempo de diagnóstico, incremento pacientes atendidos, disminución hospitalizaciones por diagnósticos tardíos.</li>
        <li>Reporte anual de impacto social y clínico con testimonios.</li>
      </ul>

      {/* II. Cultura de seguridad */}
      <h2 className="fw-bold mt-5">II. Cultura de seguridad, cumplimiento y confianza</h2>
      <ul>
        <li><strong>Marco legal y normativo:</strong> Cumplimiento NOM-024, NOM-004, ISO 13485/14971/27001, COFEPRIS, alineación con OMS.</li>
        <li>Consultoría jurídica permanente: contratos, uso de modelos preentrenados, propiedad intelectual.</li>
        <li>Gestión de riesgos: registro de incidentes, rollback de modelos, simulacros de contingencia.</li>
        <li>Capacitación a personal: interpretación de diagnósticos IA, reporte de errores y sesgos, manual de ética aplicada.</li>
        <li>IA como co-trabajador: integración en flujos clínicos existentes, procesos híbridos humano + IA.</li>
      </ul>

      {/* III. ModelOps */}
      <h2 className="fw-bold mt-5">III. ModelOps: Gestión continua del ciclo de vida de los modelos</h2>
      <ul>
        <li>Gobernanza del modelo: registro de versiones, dataset documentado, bitácora de validación clínica.</li>
        <li>Prevención de sesgos y drift: auditorías periódicas, monitoreo continuo, pruebas en poblaciones nuevas, inclusión de datos multiculturales.</li>
        <li>Validación y monitoreo: validación clínica independiente, panel de métricas (precisión, sensibilidad, F1, confiabilidad).</li>
        <li>Responsabilidad sobre resultados: trazabilidad de diagnósticos, responsabilidad clínica clara.</li>
      </ul>

      {/* IV. Infraestructura de datos */}
      <h2 className="fw-bold mt-5">IV. Infraestructura de datos, definiciones comunes y colaboración</h2>
      <ul>
        <li>Definiciones compartidas de IA: glosario interno, alineación de expectativas.</li>
        <li>Comité de gobernanza de datos: calidad, acceso, integridad, ciclo de vida completo.</li>
        <li>Arquitectura de datos: data fabric en la nube, interoperabilidad con EHRs, API pública documentada.</li>
        <li>Roles clave: Data Engineer, AI Engineer, Legal Advisor, Data Ethicist.</li>
        <li>Colaboración externa: ONGs, hospitales, co-diseño con comunidades.</li>
        <li>Tipos de datos: imágenes médicas, clínicos, signos vitales, epidemiológicos, hospitalarios, tratamientos.</li>
        <li>Conexión e integración: ingreso de datos, procesamiento IA, almacenamiento seguro, salida y consumo de datos.</li>
        <li>Framework centralizado: control ético, seguridad y trazabilidad.</li>
      </ul>

      {/* V. Políticas internas */}
      <h2 className="fw-bold mt-5">V. Políticas y regulaciones internas</h2>
      <ul>
        <li>Equidad en diagnóstico: entrenamiento con datos representativos. Responsable: Data Ethicist y médicos.</li>
        <li>Transparencia: informar uso de IA. Responsable: Comité Ético y equipo administrativo.</li>
        <li>Consentimiento informado digital: claro y revocable. Responsable: Legal Advisor.</li>
        <li>Supervisión ética: revisión de modelos antes de liberación. Responsable: Comité de Ética.</li>
        <li>Política de co-trabajo médico - IA: IA como apoyo, no reemplazo. Responsable: Director Médico.</li>
        <li>Gestión integral de riesgos: rutas de detección y mitigación. Responsable: Comité Ético, Data Ethicist y equipo IA.</li>
        <li>Seguridad de datos: cifrado, anonimización, acceso controlado. Responsable: Legal Advisor y CTO.</li>
        <li>Educación continua: capacitación en ética y justicia algorítmica. Responsable: Dirección y equipo IA/Comité Ético.</li>
        <li>Conocimiento democrático: reportes anuales accesibles, APIs abiertas, colaboración con universidades y autoridades. Responsable: Dirección y equipo IA/Comité Ético.</li>
        <li>Sostenibilidad ambiental: modelos optimizados, proveedores cloud con energías renovables. Responsable: Comité Ético y Data Ethicist.</li>
      </ul>
    </section>
  );
};

export default Resume;