
# Auto generated clients?




## Run Locally


```bash
  npx openapi-typescript-codegen --input ./spec.json --output ./generated 
```

build typescript to js
```bash
npx esbuild index.ts --bundle --platform=node --target=node20.16 --outfile=index.js
```

run 
```bash
node dist/index.js
```
