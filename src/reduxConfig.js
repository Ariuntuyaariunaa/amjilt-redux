/**
 * Created by aggressor on 1/2/17.
 */
let reduxConfig = exports;

let configList = {
    title:'aaa',
};
reduxConfig.config = function (data) {
    configList = {
        ...configList,
        ...data
    }
};
reduxConfig.get = function (option) {
    return configList[option];
};