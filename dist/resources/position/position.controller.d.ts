import { PositionService } from './position.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
export declare class PositionController {
    private readonly positionService;
    constructor(positionService: PositionService);
    create(createPositionDto: CreatePositionDto): Promise<void>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePositionDto: UpdatePositionDto): string;
    remove(id: string): string;
}
