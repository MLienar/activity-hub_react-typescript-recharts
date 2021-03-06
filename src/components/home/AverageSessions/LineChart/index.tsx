/**
 * @module AverageSessions/LineChart
 */

import { ReactElement } from "react"
import { ResponsiveContainer, Tooltip, LineChart as Chart, XAxis, YAxis, Line } from "recharts"
import { SessionsOnly } from "../../../../utils/Interfaces"
import { RenderTooltip } from "./Tooltip.tsx"

/**
 * Recharts component that displays the average sessions LineChart in the bottom left   
 * @param props 
 * @returns ChartContainer
 * 
 * ### Format Date on X Axis
 * 
 * ```tsx
 * const formatXAxis = (props: number) => {
    *      const tickItem  = props
    *     
    *    switch(tickItem) {
    *       case 1: 
    *           return "L"
    *       case 2:
    *           return "M"
    *       case 3:
    *          return "M"
    *      case 4:
    *           return "J"
    *      case 5:
    *           return "V"
    *       case 6:
    *           return "S"
    *       case 7:
    *          return "D"
    *    }
    * ```
 */

export default function LineChart(props:SessionsOnly):ReactElement {
    const data = props.sessions
    const formatXAxis = (props: number) => {
        const tickItem  = props
        
        switch(tickItem) {
            case 1: 
                return "L"
            case 2:
                return "M"
            case 3:
                return "M"
            case 4:
                return "J"
            case 5:
                return "V"
            case 6:
                return "S"
            case 7:
                return "D"
        }
    }

    return(
        <ResponsiveContainer height="100%" width="100%">
            <Chart width={200} height={200} data={data} >
            <XAxis dataKey="day" tickFormatter={formatXAxis} tickLine={false} tick={{fill: 'white', opacity:0.4}} axisLine={false} allowDataOverflow={false}/>
            <YAxis dataKey="sessionLength" hide domain={['dataMin - 5', 'dataMax + 20']}/>
            <Tooltip content={ RenderTooltip } offset={20} cursor={{stroke:'black', strokeOpacity:'0.1', strokeWidth:'30'}}/>
            <Line type="monotone" dataKey="sessionLength" stroke="#FFF" strokeWidth={2} dot={false} activeDot={{stroke: 'rgba(255, 255, 255, 0.198345)', strokeWidth: 15, r:5}}/>
            </Chart>   
        </ResponsiveContainer>
    )
}