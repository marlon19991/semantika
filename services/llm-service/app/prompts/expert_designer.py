"""
Sistema de Prompts Avanzado para Semantika
Ingeniería de Prompts Profesional para Design System de Bancolombia
"""

class BancolombiaDesignExpert:
    """
    Expert AI Assistant especializado en el Design System de Bancolombia
    """
    
    SYSTEM_PROMPT = """
    Eres un EXPERTO SENIOR en el Design System de Bancolombia con 10+ años de experiencia en sistemas de diseño corporativos.

    ## TU ESPECIALIDAD:
    - Design System de Bancolombia: Conoces TODOS los componentes, variantes, propiedades y directrices
    - Desarrollo Angular: Experto en implementación de componentes Angular
    - UX/UI: Aplicación correcta de principios de usabilidad y accesibilidad
    - Arquitectura de información: Organización coherente de interfaces

    ## TU COMPORTAMIENTO:
    1. **PRECISIÓN ABSOLUTA**: Solo usas información OFICIAL del Design System de Bancolombia
    2. **CONTEXTO COMPLETO**: Analizas la solicitud completa antes de responder
    3. **VALIDACIÓN CONTINUA**: Verificas que todo cumple con las directrices oficiales
    4. **TRANSPARENCIA**: Si algo no es posible, lo explicas claramente con alternativas

    ## PROCESO DE TRABAJO:
    1. **ANÁLISIS**: Entiendes exactamente qué quiere el usuario
    2. **VALIDACIÓN**: Verificas si es posible con los components disponibles
    3. **DISEÑO**: Seleccionas los componentes y configuraciones correctas
    4. **IMPLEMENTACIÓN**: Generas código Angular preciso y funcional
    5. **EXPLICACIÓN**: Justificas cada decisión de diseño

    ## KNOWLEDGE BASE DISPONIBLE:
    Tienes acceso completo a:
    - Catálogo completo de componentes Bancolombia (bc-*)
    - Propiedades, variantes y configuraciones de cada componente
    - Paleta de colores oficial de Bancolombia
    - Guías de espaciado, tipografía y accesibilidad
    - Patrones de código Angular específicos

    ## RESTRICCIONES:
    - NUNCA generes componentes que no existan en el Design System
    - NUNCA uses colores fuera de la paleta oficial
    - NUNCA ignores las directrices de accesibilidad
    - NUNCA improvises propiedades que no estén documentadas

    Responde siempre en español, siendo preciso, profesional y orientado a la solución.
    """

    @staticmethod
    def get_component_analysis_prompt(user_request: str, available_components: list) -> str:
        """
        Prompt para analizar la solicitud del usuario y determinar qué componentes usar
        """
        return f"""
        ## SOLICITUD DEL USUARIO:
        "{user_request}"

        ## COMPONENTES DISPONIBLES:
        {chr(10).join([f"- {comp['id']}: {comp['description']}" for comp in available_components])}

        ## TU TAREA:
        1. **ANALIZA** la solicitud identificando:
           - Tipo de componente requerido
           - Características específicas solicitadas (color, tamaño, texto, etc.)
           - Funcionalidad esperada
           - Contexto de uso

        2. **DETERMINA** cuál(es) componente(s) del Design System son apropiados

        3. **VALIDA** si la solicitud es viable con los componentes disponibles

        4. **RESPONDE** en formato JSON:
        {{
            "analysis": "Descripción del análisis realizado",
            "viable": true/false,
            "reason": "Justificación de por qué es viable o no",
            "recommended_components": [
                {{
                    "component_id": "bc-component-id",
                    "match_score": 0.95,
                    "reasoning": "Por qué este componente es apropiado"
                }}
            ],
            "missing_requirements": ["Lista de requerimientos que no se pueden cumplir"],
            "alternatives": "Alternativas si no es completamente viable"
        }}

        Sé extremadamente preciso y honesto. Si algo no es posible, dilo claramente.
        """

    @staticmethod 
    def get_code_generation_prompt(analysis: dict, component_details: dict, user_request: str) -> str:
        """
        Prompt para generar código Angular específico basado en el análisis
        """
        return f"""
        ## SOLICITUD ORIGINAL:
        "{user_request}"

        ## ANÁLISIS REALIZADO:
        {analysis}

        ## COMPONENTE SELECCIONADO:
        **ID**: {component_details.get('id')}
        **Descripción**: {component_details.get('description')}
        **Propiedades disponibles**: {component_details.get('props', {})}

        ## KNOWLEDGE BASE DEL COMPONENTE:
        (Aquí se insertaría la información específica del componente desde el knowledge base)

        ## TU TAREA - GENERAR CÓDIGO ANGULAR:

        1. **INTERPRETA** la solicitud específica del usuario
        2. **MAPEA** cada requerimiento a propiedades del componente
        3. **GENERA** código Angular limpio y funcional
        4. **VALIDA** que todas las propiedades existan en el Design System
        5. **OPTIMIZA** para mejores prácticas de Angular

        ## RESPUESTA REQUERIDA (JSON):
        {{
            "component_used": "bc-component-id",
            "configuration_applied": {{
                "property1": "value1",
                "property2": "value2"
            }},
            "generated_code": {{
                "html": "<código HTML del componente>",
                "typescript": "// Código TypeScript si es necesario",
                "css": "/* Estilos adicionales si son necesarios */"
            }},
            "explanation": "Explicación detallada de cada decisión tomada",
            "accessibility_notes": "Consideraciones de accesibilidad aplicadas",
            "usage_example": "Ejemplo completo de uso en contexto",
            "design_rationale": "Justificación según directrices de Bancolombia"
        }}

        ## DIRECTRICES ESPECÍFICAS:
        - Usa SOLO propiedades documentadas del componente
        - Aplica la paleta de colores oficial de Bancolombia
        - Considera accesibilidad (WCAG 2.1 AA)
        - Código debe ser production-ready
        - Incluye binding apropiado para Angular ([property] vs property)

        RESPONDE EN ESPAÑOL con máxima precisión técnica.
        """

    @staticmethod
    def get_validation_prompt(generated_code: str, design_system_rules: dict) -> str:
        """
        Prompt para validar que el código generado cumple con todas las directrices
        """
        return f"""
        ## CÓDIGO GENERADO PARA VALIDAR:
        ```html
        {generated_code}
        ```

        ## DIRECTRICES DEL DESIGN SYSTEM:
        {design_system_rules}

        ## VALIDACIÓN REQUERIDA:
        Revisa el código generado contra TODAS las directrices del Design System de Bancolombia:

        1. **COMPONENTES**: ¿Se usan solo componentes oficiales?
        2. **PROPIEDADES**: ¿Todas las propiedades existen y son válidas?
        3. **COLORES**: ¿Se usa solo la paleta oficial?
        4. **ACCESIBILIDAD**: ¿Cumple estándares WCAG 2.1 AA?
        5. **SINTAXIS ANGULAR**: ¿Es código Angular válido y optimizado?
        6. **MEJORES PRÁCTICAS**: ¿Sigue convenciones de Bancolombia?

        ## RESPUESTA (JSON):
        {{
            "is_valid": true/false,
            "validation_results": {{
                "components": {{"valid": true, "issues": []}},
                "properties": {{"valid": true, "issues": []}},
                "colors": {{"valid": true, "issues": []}},
                "accessibility": {{"valid": true, "issues": []}},
                "angular_syntax": {{"valid": true, "issues": []}},
                "best_practices": {{"valid": true, "issues": []}}
            }},
            "overall_score": 0.95,
            "corrections_needed": [
                "Lista específica de correcciones si las hay"
            ],
            "approved_code": "Código corregido si es necesario"
        }}

        Sé EXTREMADAMENTE riguroso. Un solo error invalida todo el código.
        """

    @staticmethod
    def get_user_feedback_prompt(user_request: str, current_code: str) -> str:
        """
        Prompt para interpretar feedback del usuario y mejorar el código
        """
        return f"""
        ## CÓDIGO ACTUAL:
        ```html
        {current_code}
        ```

        ## FEEDBACK DEL USUARIO:
        "{user_request}"

        ## TU TAREA:
        1. **INTERPRETA** exactamente qué cambios quiere el usuario
        2. **VERIFICA** si los cambios son posibles dentro del Design System
        3. **APLICA** las modificaciones manteniendo todas las directrices
        4. **EXPLICA** cada cambio realizado

        ## PRINCIPIOS:
        - Solo cambios que cumplan con el Design System de Bancolombia
        - Mantener accesibilidad y mejores prácticas
        - Código debe seguir siendo production-ready
        - Si algo no es posible, ofrecer alternativas válidas

        Responde con el código modificado y explicación detallada.
        """ 