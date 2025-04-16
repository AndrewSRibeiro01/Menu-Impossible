import iconalarm from "../assets/img/alarm clock.svg"
import iconBlock from "../assets/img/block.svg"
import iconCircle from "../assets/img/circle.svg"
import iconLoading from "../assets/img/loading.svg"
import iconQuestion from "../assets/img/Icon.svg"

export const db = [
    {
        id: "Tempo médio de despacho:",
        icon: iconalarm,
        hour: "10h",
        label: `em relação
ao mês passado`
    },
    {
        id: "Perguntas no mês:",
        icon: iconQuestion,
        hour: "7",
        label: `em relação
ao mês passado`
    },
    {
        id: "Reclamações no mês:",
        icon: iconCircle,
        hour: "1",
        label: `em relação
ao mês passado`
    },
    {
        id: "Atrasados últimos 30 dias:",
        icon: iconalarm,
        hour: "0",
        label: `em relação
ao mês passado`
    },
    {
        id: "Cancelamentos do mês:",
        icon: iconBlock,
        hour: "2",
        label: `em relação
ao mês passado`
    },
    {
        id: "Cancelamentos por você:",
        icon: iconLoading,
        hour: "3",
        label: `em relação
ao mês passado`
    }
]