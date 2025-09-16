export class CreateUserRepository {
  async execute(createUserParams) {
    // create user in postgres
    const results = await PostgrsHelper.query(
        'INSERT INTO users (id, first_name, last_name, email, password) VALUES ($1, $2, $3 $4, $5)',
        [
         createUserParams.ID    ,
         createUserParams.firstName,
         createUserParams.lastName,
         createUserParams.email,
         createUserParams.password,
  ]
    )

    return results[0]
  }

  }
