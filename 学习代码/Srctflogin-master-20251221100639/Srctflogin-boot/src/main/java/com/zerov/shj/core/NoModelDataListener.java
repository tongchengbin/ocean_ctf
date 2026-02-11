package com.zerov.shj.core;

import com.alibaba.excel.context.AnalysisContext;
import com.alibaba.excel.event.AnalysisEventListener;
import com.alibaba.excel.metadata.CellData;
import lombok.Data;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Data
public class NoModelDataListener extends AnalysisEventListener<Map<Integer, String>> {

    private List<List<String>> data = new ArrayList<>();
    private List<String> header = new ArrayList<>();


    @Override
    public void invokeHead(Map<Integer, CellData> headMap, AnalysisContext context) {
        super.invokeHead(headMap, context);
        for (Integer key : headMap.keySet()) {
            CellData cellData = headMap.get(key);
            String value = cellData.toString();
            // String value = cellData.getDataFormatString();
            // if (StringUtils.isEmpty(value)) {
            //     value = "num_" + key;
            // }
            header.add(value);
        }
    }

    @Override
    public void invoke(Map<Integer, String> dataMap, AnalysisContext context) {
        List<String> line = new ArrayList<>();
        for (Integer key : dataMap.keySet()) {
            String value = dataMap.get(key);
            if (StringUtils.isEmpty(value)) {
                value = "";
            }
            line.add(value);
        };
        int size = line.size();
        if(size < header.size()){
            for (int i = 0; i < header.size() - size; i++) {
                line.add("");
            }
        }
        data.add(line);
    }

    @Override
    public void doAfterAllAnalysed(AnalysisContext analysisContext) {
    }

    public void clear() {
        data.clear();
        header.clear();
    }
}