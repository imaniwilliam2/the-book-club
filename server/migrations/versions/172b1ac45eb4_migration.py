"""migration

Revision ID: 172b1ac45eb4
Revises: 3fc364929686
Create Date: 2024-04-29 15:43:01.207073

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '172b1ac45eb4'
down_revision = '3fc364929686'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('books', schema=None) as batch_op:
        batch_op.add_column(sa.Column('author_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_books_author_id_authors'), 'authors', ['author_id'], ['id'])

    with op.batch_alter_table('reads', schema=None) as batch_op:
        batch_op.drop_column('favorite')

    with op.batch_alter_table('tbreads', schema=None) as batch_op:
        batch_op.drop_column('favorite')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tbreads', schema=None) as batch_op:
        batch_op.add_column(sa.Column('favorite', sa.BOOLEAN(), nullable=True))

    with op.batch_alter_table('reads', schema=None) as batch_op:
        batch_op.add_column(sa.Column('favorite', sa.BOOLEAN(), nullable=True))

    with op.batch_alter_table('books', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_books_author_id_authors'), type_='foreignkey')
        batch_op.drop_column('author_id')

    # ### end Alembic commands ###
