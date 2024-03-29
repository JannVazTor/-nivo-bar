import { BarDatum, BarLegendProps, BarSvgProps, BarsWithHidden, LegendData, LegendLabelDatum } from '../types';
export declare const getLegendDataForKeys: <RawDatum extends BarDatum>(bars: BarsWithHidden<RawDatum>, layout: "horizontal" | "vertical", direction: BarLegendProps['direction'], groupMode: "grouped" | "stacked", reverse: boolean, getLegendLabel: (datum: LegendLabelDatum<RawDatum>) => string) => LegendData[];
export declare const getLegendDataForIndexes: <RawDatum extends BarDatum>(bars: BarsWithHidden<RawDatum>, layout: "horizontal" | "vertical", getLegendLabel: (datum: LegendLabelDatum<RawDatum>) => string) => LegendData[];
export declare const getLegendData: <RawDatum extends BarDatum>({ bars, direction, from, groupMode, layout, legendLabel, reverse, }: Pick<Required<BarSvgProps<RawDatum>>, "groupMode" | "layout" | "reverse"> & {
    bars: BarsWithHidden<RawDatum>;
    direction: BarLegendProps['direction'];
    from: BarLegendProps['dataFrom'];
    legendLabel: import("@nivo/core").PropertyAccessor<LegendLabelDatum<RawDatum>, string> | undefined;
}) => LegendData[];
//# sourceMappingURL=legends.d.ts.map