package net.minecraft.src;

public class Frustrum implements ICamera {
    private final ClippingHelper clippingHelper = ClippingHelperImplementation.getInstance();
    private double xPosition;
    private double yPosition;
    private double zPosition;

    public void setPosition(double x, double y, double z) {
        xPosition = x;
        yPosition = y;
        zPosition = z;
    }

    public boolean isBoxInFrustum(double minX, double minY, double minZ, double maxX, double maxY, double maxZ) {
    	minX -= xPosition;
    	minY -= yPosition;
    	minZ -= zPosition;
    	maxX -= xPosition;
    	maxY -= yPosition;
    	maxZ -= zPosition;
        return clippingHelper.isBoxInFrustum(minX, minY, minZ, maxX, maxY, maxZ);
    }

    public boolean isBoundingBoxInFrustum(AxisAlignedBB boundingBox) {
        return isBoxInFrustum(boundingBox.minX, boundingBox.minY, boundingBox.minZ, boundingBox.maxX, boundingBox.maxY, boundingBox.maxZ);
    }
}