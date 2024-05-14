import * as borsh from 'borsh';
import * as math from './math';

class MathSquare {
    square = 0;
    constructor(fields: {square: number} | undefined = undefined){
        if(fields){
            this.square = fields.square;
        }
    }
}

const MathSquareSchema = new Map([
    [MathSquare, {kind: 'struct', fields: [['square', 'u32']]}],
]);

const MATH_SIZE = borsh.serialize(
    MathSquareSchema,
    new MathSquare (),
).length;

async function main() {
    await math.example('square', MATH_SIZE);
}

main().then(
    () => process.exit(),
    err => {
        console.error(err);
        process.exit(-1);
    },
);