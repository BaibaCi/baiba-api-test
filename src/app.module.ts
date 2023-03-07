import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { AboutModule } from './about/about.module';
import { IdeaboxModule } from './ideabox/ideabox.module';
import { WorkdesignModule } from './workdesign/workdesign.module';
import { ShopModule } from './shop/shop.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [UserModule, BlogModule, AboutModule, IdeaboxModule, WorkdesignModule, ShopModule, PrismaModule],
})
export class AppModule {}
