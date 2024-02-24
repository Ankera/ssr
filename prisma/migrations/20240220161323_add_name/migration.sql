-- AlterTable
ALTER TABLE `user` ADD COLUMN `name` VARCHAR(191) NULL,
    MODIFY `email` CHAR(255) NULL,
    MODIFY `password` VARCHAR(191) NULL;
