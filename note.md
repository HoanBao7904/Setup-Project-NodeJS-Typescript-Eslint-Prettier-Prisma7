Bài 1 → Prisma là gì + cài đặt
Bài 2 → prisma init + schema.prisma
Bài 3 → Model + @id + @default + @unique
Bài 4 → Migration
Bài 5 → Prisma Client
Bài 6 → CRUD
Bài 7 → where / select / orderBy
Bài 8 → Relations
Bài 9 → include / select relations
Bài 10 → Nested Create / Update
Bài 11 → Pagination
Bài 12 → Aggregate / groupBy
Bài 13 → Transaction
Bài 14 → Prisma + Express
Bài 15 → Controller / Service / Repository
Bài 16 → Authentication + Prisma
Bài 17 → Twitter Clone Backend

PRISMA – 4 LỆNH QUAN TRỌNG

1. DB PULL
   npx prisma db pull

PostgreSQL → schema.prisma

Dùng khi database đã có sẵn và muốn Prisma đọc cấu trúc database.

2. DB PUSH
   npx prisma db push

schema.prisma → PostgreSQL

Dùng để cập nhật database nhanh từ schema.
Không tạo migration.

3. MIGRATE DEV
   npx prisma migrate dev --name ten_migration

schema.prisma → migration → PostgreSQL

Dùng khi muốn thay đổi database và lưu lại lịch sử migration.
Ví dụ:

npx prisma migrate dev --name add_test_prisma

migrate dev thường sẽ generate Prisma Client.

4. GENERATE
   npx prisma generate

schema.prisma → Prisma Client

Dùng để generate/cập nhật Prisma Client và TypeScript types.
Không tạo hoặc thay đổi bảng PostgreSQL.

==================================================

NHỚ NGẮN GỌN:

db pull
→ PostgreSQL → schema.prisma

db push
→ schema.prisma → PostgreSQL

migrate dev
→ schema.prisma → migration → PostgreSQL

generate
→ schema.prisma → Prisma Client
