import * as borsh from 'borsh';
import * as math from './math';

class MathSum {
    sum = 0;
    constructor(fields: {sum: number} | undefined = undefined){
        if(fields){
            this.sum = fields.sum;
        }
    }
}

const MathSumSchema = new Map([
    [MathSum, {kind: 'struct', fields: [['sum', 'u32']]}],
]);

const MATH_SIZE = borsh.serialize(
    MathSumSchema,
    new MathSum(),
).length;

async function main() {
    await math.example('sum', MATH_SIZE);
}

main().then(
    () => process.exit(),
    err => {
        console.error(err);
        process.exit(-1);
    },
);