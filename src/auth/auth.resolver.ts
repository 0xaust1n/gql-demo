import { Injectable } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { of } from 'rxjs';
import { Member } from 'src/entity/member.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './input/create-user.input';
import { FindUserInput } from './input/find-user.input';
import { UpdateUserInput } from './input/update-user.input';
import { LoginModel } from './model/login.model';
import { LogcinReturnBody } from './model/loigin-return-body';
Injectable();
@Resolver(() => 'Auth')
export class AuthResolver {
  constructor(
    @InjectRepository(Member)
    private memebrRepository: Repository<Member>,
  ) {}
  @Mutation(() => String)
  async createUser(@Args('data') input: CreateUserInput) {
    console.log('fuck=>', input);
    const inputMember = {
      memberName: input.memberName,
      birthday: input.birthday,
      gender: input.gender,
      weight: input.weight,
      createdBy: 'Systems',
    };
    await this.memebrRepository.save(inputMember);
    return 'yes';
  }

  @Mutation(() => String)
  async updateUser(@Args('data') input: UpdateUserInput) {
    console.log('fuck=>', input);
    const existMember = await this.memebrRepository.findOne({
      where: {
        id: input.id,
      },
    });
    existMember.memberName = input?.memberName;
    existMember.gender = input?.gender;
    existMember.birthday = input?.birthday;
    existMember.gender = input?.gender;

    // Object.assign(existMember, input);

    await this.memebrRepository.save(existMember);
    return 'yes babe';
  }

  @Query(() => LoginModel)
  async getUser(@Args('data') input: FindUserInput) {
    const existMember = await this.memebrRepository.findOne({
      where: {
        id: input.Id,
      },
    });

    if (existMember) {
      const res: LoginModel = {
        status: '200',
        message: '',
        body: {
          ...existMember, // 偷
        },
      };

      return res;
    } else {
      const res: LoginModel = {
        status: '400',
        message: `Can't find the memebr`,
      };
      return res;
    }
  }

  @Mutation(() => LoginModel)
  async deleteUser(@Args('data') input: FindUserInput) {
    console.log(input);
    const existMember = await this.memebrRepository.findOne({
      where: {
        id: input.Id,
      },
    });

    if (!existMember) {
      const res: LoginModel = {
        status: '400',
        message: `Can't find the memebr`,
      };
      return res;
    } else {
      console.log(existMember);
      await this.memebrRepository.remove(existMember);
      const res: LoginModel = { status: '200', message: 'Delete Successfully' };
      return res;
    }
  }
}
