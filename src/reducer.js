export const ADICIONAR_COLABORADOR = 'ADICIONAR_COLABORADOR';
export const EXCLUIR_COLABORADOR = 'EXCLUIR_COLABORADOR';
export const FAVORITAR_COLABORADOR = 'FAVORITAR_COLABORADOR';

const reducer = (estado, acao) => {
    switch (acao.tipo) {
        case ADICIONAR_COLABORADOR:
            return [...estado, acao.colaborador];
        case EXCLUIR_COLABORADOR:
            return estado.filter((colaborador) => colaborador.id !== acao.id);
        case FAVORITAR_COLABORADOR:
            return estado.map(colaboradorVerificar => {
                if (colaboradorVerificar.id === acao.id) {
                    colaboradorVerificar.favorito = !colaboradorVerificar.favorito;
                };
                return colaboradorVerificar;
            });

        default:
            return estado;
    }
}

export default reducer;