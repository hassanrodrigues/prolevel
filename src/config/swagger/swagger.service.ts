import { INestApplication, Injectable } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

@Injectable()
export class SwaggerService {

    init(app: INestApplication) {
        const config = new DocumentBuilder()
            .setTitle(process.env.SWAGGER_TITLE)
            .setDescription(process.env.SWAGGER_DESCRIPTION)
            .setVersion(process.env.SWAGGER_VERSION)
            .addBearerAuth()  
            .build();

        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('/swagger', app, document);
    }
}
