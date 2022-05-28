import express from 'express';
import inventoryService from '../services/inventory.service';


class InventoryController {

    async listInventoryItems(req: express.Request, res: express.Response) {
        const approval=await inventoryService.getInventory();
        
        res.status(200).send(approval);
    }

    async pushInventoryItem(req: express.Request, res: express.Response) {
        const approval=await inventoryService.pushInventoryItem(req.body.type,
            req.body.value, req.body.amount);
        
        res.status(200).send(approval);
    }

    async clean(req: express.Request, res: express.Response) {
        const approval=await inventoryService.clean();
        
        res.status(200).send(approval);
    }


    
}

export default new InventoryController()