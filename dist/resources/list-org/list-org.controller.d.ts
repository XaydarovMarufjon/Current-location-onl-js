import { ListOrgService } from './list-org.service';
import { CreateListOrgDto } from './dto/create-list-org.dto';
import { UpdateListOrgDto } from './dto/update-list-org.dto';
export declare class ListOrgController {
    private readonly listOrgService;
    constructor(listOrgService: ListOrgService);
    create(createListOrgDto: CreateListOrgDto): Promise<import(".prisma/client").ListOrg>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateListOrgDto: UpdateListOrgDto): string;
    remove(id: string): string;
}
