//% weight=100 icon="☯" color=#ff6347 block="myBlock"
namespace myBlock {
    //% blockId=show_strings block="myBlock %v"
    export function show(text: string): void {
        basic.showString(text);
    }
}