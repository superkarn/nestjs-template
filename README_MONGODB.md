
## How to use MongoDB
- Install mongoDB
    ```
    > npm install --save mongodb
    ```
- Skip `npm run migration:run` since MongoDB is NoSQL
- Create a new MongoDB database (e.g. `myDatabase`; should match what you set `TYPEORM_DATABASE` to)
- Create a new collection `passengers`
- Update `config.provider.ts`
    - Comment out these lines, since we're not using credentials with MongoDB for now.
    ```
    TYPEORM_USERNAME: Joi.string().required(),
    TYPEORM_PASSWORD: Joi.string().required(),
    ```
- Update entity classes.  Follow https://github.com/typeorm/typeorm/blob/master/docs/mongodb.md
    - Change `@PrimaryGeneratedColumn()` to `@ObjectIdColumn()`
    - Change `@Column({ name: 'first_name'...})` to `@Column({ name: 'firstName'...})`
    - Change `@Column({ name: 'last_name'...})` to `@Column({ name: 'lastName'...})`

- If running on Windows, update package.json "scripts"
    - https://github.com/typeorm/typeorm/issues/706#issuecomment-446560289